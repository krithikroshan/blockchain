from django.urls import path

from . import views

app_name='orders'

urlpatterns = [
    path('bookings', views.BookingView.as_view(), name='booking'),
    path('bookings/<str:booking_id>', views.BookingByIDView.as_view(), name='booking-by-id'),

    path('tickets', views.TicketView.as_view(), name='ticket'),
    path('tickets/<str:ticket_id>', views.TicketByIDView.as_view(), name='ticket-by-id'),

    path('addons', views.AddOnsBoughtView.as_view(), name='add-ons-bought'),
    # path('addons/<str:add_onI>', views.AddOnsBoughtView.as_view(), name='add-ons-bought-by-id'),
    path('details/<str:wallet>', views.getOrderDetailsByUser, name='order-details-by-user'),
]
