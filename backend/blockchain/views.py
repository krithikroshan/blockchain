from django.shortcuts import render
from events.models import Event, EventPromo
from orders.models import PromosRedeemed
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .functions import getNFTsByWallet, verifySignature
from .models import Collection, CollectionEventPromo
from .serializers import CollectionEventPromoSerializer, CollectionSerializer


class CollectionView(APIView):

    def get(self, request):
        collections = Collection.objects.all()
        serializer = CollectionSerializer(collections, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CollectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CollectionByIDView(APIView):

    def get(self, request, collection_id):
        collection = Collection.objects.get(id=collection_id)
        serializer = CollectionSerializer(collection, many=False)
        return Response(serializer.data)

    def put(self, request, collection_id):
        collection = Collection.objects.get(id=collection_id)
        serializer = CollectionSerializer(collection, data=request.data, partial=True)
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, collection_id):
        Collection.objects.get(id=collection_id).delete()
        return Response() 

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def getPromosForWallet(request):
    wallet_address = request.data.get('wallet_address')
    signature = request.data.get('signature')
    user = request.user
    verified = verifySignature(wallet_address, user, signature)
    if not verified:
        return Response("An error occured", status=status.HTTP_400_BAD_REQUEST)
    else:
        event = Event.objects.get(id = request.data.get('event_id'))
        nfts = getNFTsByWallet(wallet_address)
        event_promos = EventPromo.objects.filter(event = event)
        expand_objects = ['collection', 'event_promo.promo']
        output = []
        for nft in nfts:
            contract = nft['contract'].split(':')[1]
            try:
                collection = Collection.objects.get(contract_address=contract)
                try:
                    collection_event_promo = CollectionEventPromo.objects.filter(collection=collection, event_promo__in=event_promos)
                    try:
                        PromosRedeemed.objects.get(collection_promo__in=collection_event_promo, token_id=nft['tokenId'], redeemed=True)
                    except PromosRedeemed.DoesNotExist:
                        serializer = CollectionEventPromoSerializer(collection_event_promo, expand=expand_objects, many=True)
                        data = serializer.data[0]
                        data['token_id'] = nft['tokenId']
                        output.append(data)
                except Collection.DoesNotExist:
                    pass
            except Collection.DoesNotExist:
                pass
        return Response(output)

