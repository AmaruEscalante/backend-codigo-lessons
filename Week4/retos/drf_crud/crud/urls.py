from django.urls import path
from crud.views import BookingCreateController, CRUDBookingController

urlpatterns = [
    path('booking/', BookingCreateController.as_view()),
    path('booking/<int:pk>', CRUDBookingController.as_view())
]
