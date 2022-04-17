from blockchain.functions import deploy
from blockchain.models import Collection, CollectionEventPromo
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from users.models import User
from .models import (AddOn, AddOnOption, Category, Event, EventPromo, Location,
                     Promo, Segment, TicketType, TicketTypeAddOn)
from .serializers import (AddOnOptionSerializer, AddOnSerializer,
                          CategorySerializer, EventSerializer,
                          LocationSerializer, PromoSerializer,
                          TicketTypeAddOnSerializer, TicketTypeSerializer)


class LocationView(APIView):

    def get(self, request):
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = LocationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LocationByIDView(APIView):

    def get(self, request, location_id):
        location = Location.objects.get(id=location_id)
        serializer = LocationSerializer(location, many=False)
        return Response(serializer.data)

    def put(self, request, location_id):
        location = Location.objects.get(id=location_id)
        serializer = LocationSerializer(location, data=request.data, partial=True)
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, location_id):
        Location.objects.get(id=location_id).delete()
        return Response() 


class EventView(APIView):

    def get(self, request):
        events = Event.objects.all()

        if request.query_params.get('published') == 'true':
            events = events.filter(status = 'Live')   
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')
        serializer = EventSerializer(events, expand=expand_objects, many=True)
        return Response(serializer.data)

    def post(self, request):
        print("request")
        print(request.data)
        # location_data = request.data.get('location')
        # if location_data is not None:
        #     location_serializer = LocationSerializer(data=location_data)
        #     if location_serializer.is_valid():
        #         location_serializer.save()
        #         request.data['location'] = location_serializer.data['id']
        #     else:
        #         print('error', location_serializer.errors)
        #         return Response(location_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
        request.data['location'] = 1
        request.data['organiser'] = User.objects.get(id = request.data.get('user_id')).id
        event_serializer = EventSerializer(data=request.data)
        if event_serializer.is_valid():
            event_serializer.save()
            return Response(event_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', event_serializer.errors)
            return Response(event_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class EventByIDView(APIView):

    def get(self, request, event_id):
        event = Event.objects.get(id=event_id)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')  
        serializer = EventSerializer(event, expand=expand_objects, many=False)
        return Response(serializer.data)

    def put(self, request, event_id):
        event = Event.objects.get(id=event_id)
        serializer = EventSerializer(event, data=request.data, partial=True)
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, event_id):
        Event.objects.get(id=event_id).delete()
        return Response() 


class TicketTypeView(APIView):

    def get(self, request, event_id):
        ticket_types = TicketType.objects.filter(event_id = event_id)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')
        serializer = TicketTypeSerializer(ticket_types, expand=expand_objects, many=True)
        return Response(serializer.data)

    def post(self, request, event_id):
        print("request")
        print(request.data)
        if request.data.get('segment') is not None:
            segment = Segment.objects.get(id=request.data.get('segment'))
            if segment.event.id != request.data.get('event'):
                return Response("Segment is not for same event as ticket type", status=status.HTTP_400_BAD_REQUEST)
        serializer = TicketTypeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TicketTypeByIDView(APIView):
    def get(self, request, ticket_type_id):
        ticket_type = TicketType.objects.get(id=ticket_type_id)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')  
        expand_objects.append('segment')
        serializer = TicketTypeSerializer(ticket_type, expand=expand_objects, many=False)
        return Response(serializer.data)

    def put(self, request, ticket_type_id):
        ticket_type = TicketType.objects.get(id=ticket_type_id)
        serializer = TicketTypeSerializer(ticket_type, data=request.data, partial=True)
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, ticket_type_id):
        TicketType.objects.get(id=ticket_type_id).delete()
        return Response() 


class AddOnView(APIView):

    def get(self, request, event_id):
        add_ons = AddOn.objects.filter(event_id = event_id)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')
        serializer = AddOnSerializer(add_ons, expand=expand_objects, many=True)
        return Response(serializer.data)

    def post(self, request, event_id):
        add_on_serializer = AddOnSerializer(data=request.data)
        if add_on_serializer.is_valid():
            add_on = add_on_serializer.save()
            ticket_types = request.data.get('ticket_types')
            for ticket_type in ticket_types:
                ticket_type_add_on = TicketTypeAddOn(ticket_type=TicketType.objects.get(id=ticket_type), add_on=add_on)
                ticket_type_add_on.save()
            return Response(add_on_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', add_on_serializer.errors)
            return Response(add_on_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class AddOnByTicketTypeView(APIView):
    def get(self, request, ticket_type_id):
        ticket_type_add_ons = TicketTypeAddOn.objects.filter(ticket_type_id = ticket_type_id)
        add_on_ids = []
        for ticket_type_add_on in ticket_type_add_ons:
            add_on_ids.append(ticket_type_add_on.add_on.id)
        add_ons = AddOn.objects.filter(id__in=add_on_ids)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')  
        serializer = AddOnSerializer(add_ons, expand=expand_objects, many=True)
        return Response(serializer.data)

class AddOnByIDView(APIView):
    def get(self, request, add_on_id):
        add_on = AddOn.objects.get(id=add_on_id)
        expand_objects = []
        if request.query_params.get('expand') is not None:
            expand_objects = request.query_params.get('expand').split(',')  
        serializer = AddOnSerializer(add_on, expand=expand_objects, many=False)
        return Response(serializer.data)

    def put(self, request, add_on_id):
        add_on = AddOn.objects.get(id=add_on_id)
        serializer = AddOnSerializer(add_on, data=request.data, partial=True)
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, add_on_id):
        AddOn.objects.get(id=add_on_id).delete()
        return Response() 

class PromoView(APIView):

    def get(self, request):
        promos = Promo.objects.all()
        serializer = PromoSerializer(promos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = PromoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryView(APIView):

    def get(self, request):
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CategoryByIDView(APIView):

    def get(self, request, category_id):
        category = Category.objects.get(id=category_id)
        serializer = CategorySerializer(category, many=False)
        return Response(serializer.data)

    def put(self, request, category_id):
        category = Category.objects.get(id=category_id)
        serializer = CategorySerializer(category, data=request.data, partial=True)
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        else:
            print('error', serializer.errors)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, category_id):
        Category.objects.get(id=category_id).delete()
        return Response() 
