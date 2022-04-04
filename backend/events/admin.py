from django.contrib import admin
from import_export.admin import ImportExportModelAdmin

from .models import (AddOn, AddOnOption, Category, Event, EventPromo, Location,
                     Promo, Segment, TicketType, TicketTypeAddOn)


@admin.register(Location)
class LocationAdmin(ImportExportModelAdmin):
    pass

@admin.register(Category)
class CategoryAdmin(ImportExportModelAdmin):
    pass

@admin.register(Event)
class EventAdmin(ImportExportModelAdmin):
    pass

@admin.register(Segment)
class SegmentAdmin(ImportExportModelAdmin):
    pass
@admin.register(TicketType)
class TicketTypeAdmin(ImportExportModelAdmin):
    pass

@admin.register(AddOn)
class AddOnAdmin(ImportExportModelAdmin):
    pass

@admin.register(AddOnOption)
class AddOnOptionAdmin(ImportExportModelAdmin):
    pass

@admin.register(TicketTypeAddOn)
class TicketTypeAddOnAdmin(ImportExportModelAdmin):
    pass
@admin.register(Promo)
class PromoAdmin(ImportExportModelAdmin):
    pass
@admin.register(EventPromo)
class EventPromoAdmin(ImportExportModelAdmin):
    pass
