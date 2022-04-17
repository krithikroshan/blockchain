import secrets

from blockchain.functions import verifySignature
from django.shortcuts import render
from magic_admin import Magic
from magic_admin.error import DIDTokenError
from magic_admin.utils.http import parse_authorization_header_value
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from eth_account.messages import encode_defunct
from rest_framework_simplejwt.tokens import RefreshToken
from web3 import Web3

from .models import User
from .serializers import UserSerializer


w3 = Web3()
magic = Magic(api_secret_key='sk_live_C37698D989898F8F')

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh_token': str(refresh),
        'access_token': str(refresh.access_token),
    }

@api_view(['POST'])
def login(request):
    wallet_address = request.data.get('wallet_address')
    user = User.objects.get(wallet_address = wallet_address)
    message = encode_defunct(text=user.nonce)
    encrypted_address = w3.eth.account.recover_message(message, signature=request.data.get('signature')) 

    if encrypted_address.lower() == wallet_address.lower():
        new_nonce = secrets.token_hex(8)
        print(new_nonce)
        user.nonce = new_nonce
        user.save()
        serializer = UserSerializer(user, many=False)
        response = serializer.data
        tokens = get_tokens_for_user(user)
        response['refresh_token'] = tokens['refresh_token']
        response['access_token'] = tokens['access_token']
        return Response(response) 
    else:
        print("Signature error")
    return Response("signature error", status=status.HTTP_401_UNAUTHORIZED)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def connect(request):
    wallet_address = request.query_params.get('wallet_address')
    try:
        user = User.objects.get(wallet_address = wallet_address)
    except:
        user = User.objects.create(
        username = wallet_address,
        password = "password", 
        wallet_address = wallet_address,
        nonce = secrets.token_hex(8),
    )
    # user = request.user
    return Response(user.nonce, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def sign(request):
    verified = verifySignature(request.data.get('wallet_address'), request.user, request.data.get('signature'))
    if verified:
        return Response("Signature verified") 
    else:
        return Response("An error occured", status=status.HTTP_400_BAD_REQUEST)

