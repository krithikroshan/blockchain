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

from .models import User
from .serializers import UserSerializer

magic = Magic(api_secret_key='sk_live_C37698D989898F8F')


@api_view(['POST'])
def login(request):
    print(request.data)
    did_token = parse_authorization_header_value(request.headers.get('Authorization'))
    if did_token is None:
        return Response('Authorization header is missing or header value is invalid', status=status.HTTP_400_BAD_REQUEST)

    # Validate the did_token
    try:
        magic.Token.validate(did_token)
        issuer = magic.Token.get_issuer(did_token)
    except DIDTokenError as e:
        return Response('DID Token is invalid: {}'.format(e), status=status.HTTP_400_BAD_REQUEST)

    try:
        User.objects.get(email = request.data.get('email'))
    except:
        User.objects.create(
        username = request.data.get('email'),
        email = request.data.get('email'),
        password = "password", 
        wallet_address = magic.Token.get_public_address(did_token),
        first_name = request.data.get('first_name'),
        last_name = request.data.get('last_name'),
        nonce = secrets.token_hex(8),
    )
    # Use your application logic to load the user info.
    # user_info = logic.User.load_by(issuer=issuer)
    resp = {'authenticated': True}

    return Response(resp)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def connect(request):
    wallet_address = request.query_params.get('wallet_address')
    user = request.user
    if user.wallet_address is not None:
        if user.wallet_address == wallet_address:
            return Response(user.nonce, status=status.HTTP_200_OK)
        else:
            return Response("User already has different wallet connected", status=status.HTTP_400_BAD_REQUEST)
    else:
        user.wallet_address = wallet_address
        user.save()
        return Response(user.nonce, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def sign(request):
    verified = verifySignature(request.data.get('wallet_address'), request.user, request.data.get('signature'))
    if verified:
        return Response("Signature verified") 
    else:
        return Response("An error occured", status=status.HTTP_400_BAD_REQUEST)

