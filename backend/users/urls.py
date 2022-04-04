from django.urls import include, path

from . import views

app_name='users'

urlpatterns = [
    path('auth/login/', views.login, name='login'),
    path('wallet/connect/', views.connect, name='login'),
    path('wallet/sign/', views.sign, name='login'),
]
