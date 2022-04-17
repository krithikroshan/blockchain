from django.contrib import admin
from import_export.admin import ImportExportModelAdmin
from .models import Collection, CollectionEventPromo

@admin.register(Collection)
class CollectionAdmin(ImportExportModelAdmin):
    pass
@admin.register(CollectionEventPromo)
class CollectionEventPromoAdmin(ImportExportModelAdmin):
    pass
