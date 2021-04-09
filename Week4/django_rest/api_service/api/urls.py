from django.urls import path, include
from api import views

from rest_framework import routers

router=routers.DefaultRouter()
router.register("clientservices", views.ClientList)

urlpatterns=[
    path('clients/', include(router.urls)),
]