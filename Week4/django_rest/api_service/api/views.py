from django.shortcuts import render
from rest_framework import serializers, viewsets
from api.models import Client
from api.serializers import *
# Create your views here.

class ClientList (viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer