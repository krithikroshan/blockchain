from django.urls import include, path

from . import views

app_name='users'

urlpatterns = [
    path('wallet/login/', views.login, name='login'),
    # path('auth/connect/', views.login, name='connect'),
    path('wallet/connect/', views.connect, name='login'),
    path('wallet/sign/', views.sign, name='login'),
]
