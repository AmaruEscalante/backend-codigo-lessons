from django.contrib.auth.models import User, Group
from rest_framework import viewsets, permissions
from rest_framework.generics import RetrieveUpdateDestroyAPIView, ListCreateAPIView

from crud.models import Booking, Course, Tutor
from crud.serializers import UserSerializer, GroupSerializer, BookingSerializer, CourseSerializer, TutorSerializer

"""
    CRUD operations for Booking
"""


class BookingCreateController(ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer


class CRUDBookingController(RetrieveUpdateDestroyAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAdminUser]


class CourseViewSet(viewsets.ModelViewSet):
    """
        API endpoint that allows admin to realize CRUD operations on Course model.
    """
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAdminUser]


class TutorViewSet(viewsets.ModelViewSet):
    """
        API endpoint that allows admin to realize CRUD operations on Tutor model.
    """
    queryset = Tutor.objects.all()
    serializer_class = TutorSerializer
    permission_classes = [permissions.IsAdminUser]


class UserViewSet(viewsets.ModelViewSet):
    """
        API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
        API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
