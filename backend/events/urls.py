from django.urls import path

from . import views

app_name='events'

urlpatterns = [
    path('locations', views.LocationView.as_view(), name='location'),
    path('locations/<str:location_id>', views.LocationByIDView.as_view(), name='location-by-id'),

    path('create', views.createEvent, name='create-event'),
    path('', views.EventView.as_view(), name='event'),
    path('<str:event_id>', views.EventByIDView.as_view(), name='event-by-id'),

    path('<str:event_id>/ticket_types', views.TicketTypeView.as_view(), name='ticket-type'),
    path('ticket_types/<str:ticket_type_id>', views.TicketTypeByIDView.as_view(), name='ticket-type-by-id'),

    path('<str:event_id>/add_ons', views.AddOnView.as_view(), name='add-on'),
    path('ticket_types/<str:ticket_type_id>/add_ons', views.AddOnByTicketTypeView.as_view(), name='add-on-by-ticket-type'),
    path('add_ons/<str:add_on_id>', views.AddOnByIDView.as_view(), name='add-on-by-id'),

    path('categories', views.CategoryView.as_view(), name='category'),
    path('locations/<str:location_id>', views.CategoryByIDView.as_view(), name='category-by-id'),
]
