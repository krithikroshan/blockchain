from rest_flex_fields import FlexFieldsModelSerializer
from rest_framework import serializers

from .models import Collection, CollectionEventPromo


class CollectionSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Collection
        fields = '__all__'

class CollectionEventPromoSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = CollectionEventPromo
        fields = '__all__'
        expandable_fields = {
          'collection': ('blockchain.CollectionSerializer'),
          'event_promo': ('events.EventPromoSerializer')
        }
