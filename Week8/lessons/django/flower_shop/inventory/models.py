from django.db import models

# Create your models here.
class Wharehouse(models.Model):

    id = models.AutoField(
        unique = True,
        primary_key=True,
        null=False,
        db_column = "id",
        verbose_name="Wharehouse Id",
    )
    
    name = models.CharField(
        max_length=50,
        db_column="name",
        verbose_name='Wharehouse name',
        help_text='Wharehouse name', # Help us identifiying the field inside the administrative panel
        )

    address = models.TextField(
        db_column="address",
        # Note: verbose_name & help_text only are useful using the default administrative panel
        verbose_name='Wharehouse address',
        help_text='Wharehouse address',
    )
    
    status = models.BooleanField(
        default=True,
        null=False,
        db_column='status',
        verbose_name='Wharehouse status',
        help_text='Availability of the wharehouse',
    )
    
    class Meta:
        """Additional configuration for the table"""
        db_table = 'wharehouses'
        ordering = ["name", "address"]
        unique_together = [["name", "address"]]

        # Administrative panel variables

        verbose_name ="wharehouse"
        verbose_name_plural="wharehouses"


class Product(models.Model):
    name = models.CharField(
        max_length=50,
        null=False,
        unique=True,
    )

    description = models.CharField(
        max_length=100,
        null=False,
        default='There is no product description at the moment.',
    )

    status = models.BooleanField(
        default=True,
        null=False,
    )

    price = models.DecimalField(
        max_digits=5,
        decimal_places=2,
        null=False,
    )

# Relations

    wharehouse_id = models.ForeignKey(
        to=Wharehouse, 
        on_delete=models.PROTECT,
        related_name='wharehouseProducts',
    )

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = 'products'