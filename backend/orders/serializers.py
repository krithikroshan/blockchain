from rest_flex_fields import FlexFieldsModelSerializer
from users.serializers import UserSerializer

from .models import AddOnsBought, Booking, Ticket


class BookingSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class AddOnsBoughtSerializer(FlexFieldsModelSerializer):
    class Meta:
        model = AddOnsBought
        fields = '__all__'

class TicketSerializer(FlexFieldsModelSerializer):
    add_ons = AddOnsBoughtSerializer(many=True, read_only=True)
    class Meta:
        model = Ticket
        fields = '__all__'
        expandable_fields = {
          'booking': ('orders.BookingSerializer'),
          'ticket_type': ('events.TicketTypeSerializer'),
          'user': ('users.UserSerializer')
        }