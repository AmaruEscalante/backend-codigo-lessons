from django.db import models

# Create your models here.
# Client models

class Client(models.Model):
    name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='photos', null=True)
    description = models.TextField()

    def __str__(self):
        return self.name