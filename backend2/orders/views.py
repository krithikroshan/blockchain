import stripe
from blockchain.functions import mint
from django.db import transaction
from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from events.models import AddOn, AddOnOption, Event, TicketType
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from orders.serializers import (AddOnsBoughtSerializer, BookingSerializer,
                                TicketSerializer)

from .models import AddOnsBought, Booking, PromosRedeemed, Ticket

stripe.api_key = 'sk_test_51J6zloLkmGdhw5ZBPQp84HWXhvzmamoCmZ6tBO1Rn82xJozKJvNeGTA4mi3n9Q5CJDZq2WhKsSeLm4Z97EWBlN7m00I3rdn7HS'


class BookingView(APIView):

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user', 'event']

    def filter_queryset(self, queryset):
        for backend in list(self.filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, self)
        return queryset

    def get(self, request):
        base_bookings = Booking.objects.all()
        filtered_bookings = self.filter_queryset(base_bookings)
        serializer = BookingSerializer(filtered_bookings, many=True)
        return Response(serializer.data)

    @transaction.atomic
    def post(self, request):
        data = request.data
        payment_method_id = data.get('payment_id')
        event = Event.objects.get(id=data.get('event'))

        amount = int(data.get('amount'))
        booking = Booking.objects.create(user=request.user, amount=amount, event=event)
        print("Booking done")
        token_id = data.get('token_id')
        tickets = data.get('tickets')
        for ticket_data in tickets:
            ticket_type = TicketType.objects.get(id=ticket_data['ticket_type'])
            if ticket_type.event == event:
                ticket_type.available_quantity -= 1
                ticket_type.save()
                ticket_obj = Ticket.objects.create(
                    ticket_type=ticket_type, booking=booking, user=request.user, token_id=token_id)
                addons = ticket_data['addons']
                for addon in addons:
                    add_on = AddOn.objects.get(id=addon['add_on'])
                    if add_on.event == event:
                        add_on_option = AddOnOption.objects.get(id=addon['option'])
                        add_on_option.available_quantity -= 1
                        add_on_option.save()
                        AddOnsBought.objects.create(
                            ticket=ticket_obj, add_on=add_on, add_on_option=add_on_option, quantity=int(addon['quantity']))
                        # if add_on_option.add_on == add_on:
                        #     add_on_option.available_quantity -= 1
                        #     add_on_option.save()
                        #     AddOnsBought.objects.create(
                        #         ticket=ticket_obj, add_on=add_on, add_on_option=add_on_option, quantity=int(addon['quantity']))
                        # else:
                        #     transaction.set_rollback(True)
                        #     print("Invalid add_on_option payload")
                        #     return Response("Invalid add_on_option payload", status=status.HTTP_400_BAD_REQUEST)
                    else:
                        transaction.set_rollback(True)
                        print("Invalid add_on payload")
                        return Response("Invalid add_on payload", status=status.HTTP_400_BAD_REQUEST)
                # mint.delay(event.id, ticket_obj.id)
            else:
                transaction.set_rollback(True)
                print("Invalid ticket_type payload")
                return Response("Invalid ticket_type payload", status=status.HTTP_400_BAD_REQUEST)

        if data.get('promo') is not None:
            promo_redeemed = PromosRedeemed.objects.create(
                collection_promo = data.get('promo'),
                booking = booking,
                token_id = data.get('token_id'),
                redeemed = True
            )
            promo_redeemed.save()

        payment = stripe.PaymentIntent.create(
            customer=customer,
            payment_method=payment_method_id,
            currency='sgd',
            amount=amount*100,
            confirm=True
            )
        booking.stripe_charge_id = payment.id
        booking.completed = True
        booking.save()
        return Response("Success")

class BookingByIDView(APIView):

    def get(self, request, booking_id):
        booking = Booking.objects.get(id=booking_id)
        serializer = BookingSerializer(booking, many=False)
        return Response(serializer.data)

    def put(self, request, booking_id):
        booking = Booking.objects.get(id=booking_id)
        serializer = BookingSerializer(
            booking, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, booking_id):
        Booking.objects.get(id=booking_id).delete()
        return Response()


class TicketView(APIView):

    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user', 'ticket_type', 'retrieved', 'transaction']

    def filter_queryset(self, queryset):
        for backend in list(self.filter_backends):
            queryset = backend().filter_queryset(self.request, queryset, self)
        return queryset

    def get(self, request):
        base_tickets = Ticket.objects.all()
        filtered_tickets = self.filter_queryset(base_tickets)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')
        serializer = TicketSerializer(
            filtered_tickets, expand=expand_objects, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = TicketSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TicketByIDView(APIView):

    def get(self, request, ticket_id):
        ticket = Ticket.objects.get(id=ticket_id)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')
        serializer = TicketSerializer(
            ticket, expand=expand_objects, many=False)
        return Response(serializer.data)

    def put(self, request, ticket_id):
        ticket = Ticket.objects.get(id=ticket_id)
        serializer = TicketSerializer(ticket, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ticket_id):
        Ticket.objects.get(id=ticket_id).delete()
        return Response()


class AddOnsBoughtView(APIView):

    def get(self, request):
        addOnsBought = AddOnsBought.objects.all()
        serializer = AddOnsBoughtSerializer(addOnsBought, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = AddOnsBoughtSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
