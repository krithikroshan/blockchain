from asyncio import events

from django.db import models
from django.db.models.deletion import SET_NULL
from users.models import User

from .constants import (EVENT_CATEGORIES, EVENT_STATUSES, EVENT_TYPES,
                        PAYMENT_CHOICES, PROMO_TYPES, RESALE_PERMISSIONS,
                        SELECT_OPTIONS, TICKET_STATUSES)


class Location(models.Model):
    name                = models.CharField(max_length=128)
    address_line1       = models.CharField(max_length=128, blank=True, null=True)
    address_line2       = models.CharField(max_length=128, blank=True, null=True)
    city                = models.CharField(max_length=128, blank=True, null=True)
    state               = models.CharField(max_length=128, blank=True, null=True)
    postal_code         = models.CharField(max_length=128, blank=True, null=True)
    country             = models.CharField(max_length=128, blank=True, null=True)

    def __str__(self):
        return self.name

class Category(models.Model):
    name = models.CharField(max_length=128)

    class Meta:
        verbose_name_plural = "categories"

    def __str__(self):
        return self.name

class Event(models.Model):
    name                = models.CharField(max_length=128, null=True, blank=True)
    organiser           = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    event_type          = models.CharField(choices=EVENT_TYPES, max_length=2)
    event_category      = models.CharField(choices=EVENT_CATEGORIES, max_length=2)
    location            = models.ForeignKey(Location, on_delete=models.SET_NULL, null=True)
    online_event        = models.BooleanField(default=False)
    start_date          = models.DateField()
    start_time          = models.TimeField()
    end_date            = models.DateField()
    end_time            = models.TimeField()
    image               = models.ImageField(blank=True, null=True)
    summary             = models.TextField(blank=True, null=True)
    description         = models.TextField(blank=True, null=True)
    capacity            = models.IntegerField(blank=True, null=True)
    contract_address    = models.CharField(max_length=128, blank=True, null=True)
    status              = models.CharField(choices=EVENT_STATUSES, default="Draft", max_length=64)
    created             = models.DateTimeField(auto_now_add=True)
    changed             = models.DateTimeField(auto_now=True)
    published           = models.DateTimeField(blank=True, null=True)
    show_remaining      = models.BooleanField(default=False)
    promos              = models.ManyToManyField('Promo', through="EventPromo", blank=True)

    def __str__(self):
        return self.name

class Segment(models.Model):
    name                = models.CharField(max_length=128)
    event               = models.ForeignKey(Event, on_delete=models.CASCADE)

    def __str__(self):
        return self.name

class TicketType(models.Model):
    event               = models.ForeignKey(Event, on_delete=models.CASCADE)
    name                = models.CharField(max_length=128)
    price               = models.DecimalField(max_digits=8, decimal_places=2)
    segment             = models.ForeignKey(Segment, on_delete=models.CASCADE, blank=True, null=True)
    total_quantity      = models.IntegerField()
    available_quantity  = models.IntegerField()
    payment             = models.CharField(max_length=64, choices=PAYMENT_CHOICES, default="Paid")
    sale_start          = models.DateTimeField()
    sale_end            = models.DateTimeField()
    description         = models.TextField(blank=True, null=True)
    min_quantity        = models.IntegerField(default=1)
    max_quantity        = models.IntegerField(default=10)
    resale_permissions  = models.CharField(max_length=64, choices=RESALE_PERMISSIONS, default="None")
    resale_wallets      = models.TextField(blank=True, null=True)
    add_ons             = models.ManyToManyField('AddOn', 'TicketTypeAddOn', blank=True)

    def __str__(self):
        return self.name + " | " + self.event.name


class AddOn(models.Model):
    name                = models.CharField(max_length=512)
    event               = models.ForeignKey(Event, on_delete=models.CASCADE)
    description         = models.TextField(blank=True, null=True)
    price               = models.DecimalField(max_digits=8, decimal_places=2)
    sale_start          = models.DateTimeField()
    sale_end            = models.DateTimeField()
    min_quantity        = models.IntegerField(default=1)
    max_quantity        = models.IntegerField(default=10)
    select_type         = models.CharField(max_length=64, choices=SELECT_OPTIONS)
    booking_addon       = models.BooleanField(default=True)

    def __str__(self):
        return self.name

class AddOnOption(models.Model):
    name                = models.CharField(max_length=512)
    image               = models.ImageField(blank=True, null=True)
    add_on              = models.ForeignKey(AddOn, on_delete=models.CASCADE, related_name='options')
    total_quantity      = models.IntegerField()
    available_quantity  = models.IntegerField()

    def __str__(self):
        return self.name

class TicketTypeAddOn(models.Model):
    ticket_type         = models.ForeignKey(TicketType, on_delete=models.CASCADE)
    add_on              = models.ForeignKey(AddOn, on_delete=models.CASCADE)

    def __str__(self):
        return self.add_on.name

class Promo(models.Model):
    name                = models.CharField(max_length=128)
    code                = models.CharField(max_length=32, blank=True, null=True)
    type                = models.CharField(choices=PROMO_TYPES, default="Percentage", max_length=64)
    value               = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return self.name

class EventPromo(models.Model):
    event               = models.ForeignKey(Event, on_delete=models.CASCADE)
    promo               = models.ForeignKey(Promo, on_delete=models.CASCADE)

    def __str__(self):
        return self.event.name + " | " + self.promo.name 
