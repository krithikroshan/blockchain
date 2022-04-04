from django.conf import settings
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import ugettext_lazy as _


class User(AbstractUser):
    email               = models.EmailField(_('email address'), unique=True)
    wallet_address      = models.CharField(max_length=64, blank=True, null=True, unique=True)
    phone               = models.CharField(max_length=32, blank=True, null=True)
    discord_handle      = models.CharField(max_length=64, blank=True, null=True)
    gender              = models.CharField(max_length=64, blank=True, null=True)
    nationality         = models.CharField(max_length=64, blank=True, null=True)
    passport_no         = models.CharField(max_length=64, blank=True, null=True)
    passport_file       = models.ImageField(blank=True, null=True)
    passport_verified   = models.BooleanField(default=False)
    referral_code       = models.CharField(max_length=16, blank=True, null=True)
    referral_code       = models.CharField(max_length=16, blank=True, null=True)
    nonce               = models.CharField(max_length=16)

    USERNAME_FIELD      = 'email'
    REQUIRED_FIELDS     = ['username', 'first_name', 'last_name']

    def __str__(self):
        return self.email
