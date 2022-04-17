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
class ExpTicketSerializer(TicketSerializer):
    # Inheriting from TicketSerializer as we don't want to overwrite it.
    add_ons = AddOnsBoughtSerializer(many=True, expand = ["add_on", "add_on_option"], read_only=True)
class CombinedSerializer(FlexFieldsModelSerializer):
    booking_tickets = ExpTicketSerializer(many=True, expand = ["ticket_type"], read_only=True)
    class Meta:
        model = Booking
        fields = '__all__'
        expandable_fields = {
          'event': ('events.EventSerializer'),
        }