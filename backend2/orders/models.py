from blockchain.models import CollectionEventPromo
from django.db import models
from events.models import (TICKET_STATUSES, AddOn, AddOnOption, Event,
                           TicketType)
from users.models import User


class Booking(models.Model):
    user                = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    event               = models.ForeignKey(Event, on_delete=models.SET_NULL, null=True)
    stripe_charge_id    = models.CharField(max_length=128, blank=True, null=True)
    amount              = models.FloatField()
    completed           = models.BooleanField(default=False)
    timestamp           = models.DateTimeField(auto_now_add=True, null=True)

    def __str__(self):
        return self.user.email

class Ticket(models.Model):
    ticket_type         = models.ForeignKey(TicketType, on_delete=models.SET_NULL, null=True)
    booking             = models.ForeignKey(Booking, on_delete=models.SET_NULL, related_name='booking_tickets', null=True)
    user                = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    token_id            = models.CharField(max_length=128, blank=True, null=True)
    status              = models.CharField(max_length=64, choices=TICKET_STATUSES, default="Purchased", blank=True, null=True)
    retrieved           = models.BooleanField(default=False)


class AddOnsBought(models.Model):
    ticket              = models.ForeignKey(Ticket, on_delete=models.CASCADE, related_name='add_ons', blank=True, null=True)
    booking             = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name='booking', blank=True, null=True)
    add_on              = models.ForeignKey(AddOn, on_delete=models.SET_NULL, null=True)
    add_on_option       = models.ForeignKey(AddOnOption, on_delete=models.SET_NULL, null=True)
    quantity            = models.IntegerField()    

    # def __str__(self):
    #     return self.add_on.name

class PromosRedeemed(models.Model):
    collection_promo    = models.ForeignKey(CollectionEventPromo, on_delete=models.SET_NULL, null=True)
    booking             = models.ForeignKey(Booking, on_delete=models.CASCADE, blank=True, null=True)
    token_id            = models.CharField(max_length=64, blank=True, null=True)
    redeemed            = models.BooleanField(default=False)

    # def __str__(self):
    #     return self.collection_promo.collection.name
