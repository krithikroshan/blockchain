from django.contrib import admin

from .models import AddOnsBought, Booking, PromosRedeemed, Ticket

admin.site.register(Ticket)
admin.site.register(Booking)
admin.site.register(AddOnsBought)
admin.site.register(PromosRedeemed)
