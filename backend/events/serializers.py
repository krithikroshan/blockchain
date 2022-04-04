from rest_flex_fields import FlexFieldsModelSerializer
from rest_framework import serializers

from .models import (AddOn, AddOnOption, Category, Event, EventPromo, Location,
                     Promo, Segment, TicketType, TicketTypeAddOn)


class LocationSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

class CategorySerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class EventSerializer(FlexFieldsModelSerializer):
    category = serializers.ReadOnlyField(source='category.name')
    class Meta:
        model = Event
        fields = '__all__'
        expandable_fields = {
          'location': ('events.LocationSerializer'),
          'organiser': ('users.UserSerializer')
        }
          # depth = 1

class SegmentSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Segment
        fields = '__all__'
class TicketTypeSerializer(FlexFieldsModelSerializer):
    segment = serializers.ReadOnlyField(source='segment.name')
    class Meta:
        model = TicketType
        fields = '__all__'
        expandable_fields = {
          'event': ('events.EventSerializer'),
        }

class AddOnOptionSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = AddOnOption
        fields = '__all__'
        
class AddOnSerializer(FlexFieldsModelSerializer):
    options = AddOnOptionSerializer(many=True, read_only=True)
    class Meta:
        model = AddOn
        fields = '__all__'
        expandable_fields = {
          'event': ('events.EventSerializer'),
        }

class TicketTypeAddOnSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = TicketTypeAddOn
        fields = '__all__'

class PromoSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Promo
        fields = '__all__'
        
class EventPromoSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = EventPromo
        fields = '__all__'
        expandable_fields = {
          'event': ('events.EventSerializer'),
          'promo': ('events.PromoSerializer')
        }
