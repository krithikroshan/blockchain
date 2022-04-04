from django.urls import path

from . import views

app_name='blockchain'

urlpatterns = [
    path('collections', views.CollectionView.as_view(), name='collection'),
    path('collection/<str:collection_id>', views.CollectionByIDView.as_view(), name='collection-by-id'),
    
    path('nft/promos', views.getPromosForWallet, name='collection-by-id'),
]
