import secrets

import requests
from django.shortcuts import render
from eth_account.messages import encode_defunct
# from celery import shared_task
from events.models import Event
from orders.models import Ticket
from rest_framework import status
from rest_framework.response import Response
from web3 import Web3

w3 = Web3()

# @shared_task
def deploy(event_id):
    event = Event.objects.get(id=event_id)
    r = requests.post('https://chain.accessapp.io/misc/deploy', data = {'name':event.name, 'symbol':event.name})
    contract_address = r.json()['data']['contractAddress']
    print(contract_address)
    event.contract_address = contract_address
    event.save()
    return contract_address

# @shared_task
def mint(event_id, ticket_id):
    print(ticket_id)
    event = Event.objects.get(id=event_id)
    r = requests.post('https://chain.accessapp.io/ticket/mint', data = {'SCAddress':event.contract_address, 'toAddress':"zil14z9khgfkpgghthjpqwrvml97seryz9erekvzr0", 'tokenURI':"uri"})
    token_id = r.json()['data']['txId']
    print(token_id)
    ticket = Ticket.objects.get(id=ticket_id)
    ticket.token_id = token_id
    ticket.save()
    return token_id

def getNFTsByWallet(wallet_address, blockchain="ETHEREUM"):
    r = requests.get('https://api.rarible.org/v0.1/items/byOwner?owner='+blockchain+':'+wallet_address)
    nfts = r.json()['items']
    return nfts

def verifySignature(wallet_address, user, signature):
    if wallet_address != user.wallet_address:
        return Response("User already has different wallet connected", status=status.HTTP_400_BAD_REQUEST)
    message = encode_defunct(text=user.nonce)
    encrypted_address = w3.eth.account.recover_message(message, signature=signature) 

    if encrypted_address.lower() == wallet_address.lower():
        new_nonce = secrets.token_hex(8)
        user.nonce = new_nonce
        user.save()
        return True
    else:
        print("Signature error")
        return Response("Signature error", status=status.HTTP_401_UNAUTHORIZED)
