from django.db import models
from django.contrib.postgres.fields import ArrayField


class VolunteerModel(models.Model):

    name = models.CharField(max_length=50, null=False, blank=False)
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    languages = ArrayField(models.CharField(max_length=100))
    phone = models.CharField(max_length=12)
    whatsapp = models.CharField(max_length=12)
    created_date = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)

    def __str__(self):
        return self.name
