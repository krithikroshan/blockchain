from unicodedata import name

from django.db import models
from events.models import EventPromo
from users.models import User


class Collection(models.Model):
    name                = models.CharField(max_length=128)
    contract_address    = models.CharField(max_length=42, unique=True)
    user                = models.ForeignKey(User, on_delete=models.SET_NULL, blank=True, null=True)
    symbol              = models.CharField(max_length=64, blank=True, null=True)
    image_url           = models.ImageField(blank=True, null=True)
    external_url        = models.CharField(max_length=128, blank=True, null=True)

    def __str__(self):
        return self.name

class CollectionEventPromo(models.Model):
    collection          = models.ForeignKey(Collection, on_delete=models.CASCADE)
    event_promo         = models.ForeignKey(EventPromo, on_delete=models.CASCADE)

    def __str__(self):
        return self.collection.name
    
