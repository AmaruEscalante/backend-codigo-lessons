from django.contrib import admin

# Register your models here.
from api.models import Client


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    """Client admin."""
    list_display = ['pk', 'name', 'last_name']
    list_display_links = ['pk']
    list_editable = ['name', 'last_name']