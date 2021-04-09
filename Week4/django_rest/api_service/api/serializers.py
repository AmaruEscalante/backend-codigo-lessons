from rest_framework import serializers, viewsets
from api.models import Client

class ClientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model=Client
        fields=("id", "name", "last_name", "description", "photo")