from django.db import models
from django.contrib.postgres.fields import ArrayField


class VolunteerModel(models.Model):

    name = models.CharField(max_length=50, null=False, blank=False)
    email = models.EmailField(max_length=254, blank=True, null=True)
    state = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    languages = ArrayField(models.CharField(max_length=254))
    phone = models.CharField(max_length=20)
    whatsapp = models.CharField(max_length=20)
    joined_date = models.DateTimeField(auto_now_add=True)
    verified = models.BooleanField(default=False)
    active = models.BooleanField(default=False)
    rejected = models.BooleanField(default=False)
    social_media = models.CharField(max_length=254, null=True, blank=True)
    discord_community = models.BooleanField(default=False)

    preferred_work = ArrayField(models.CharField(choices=[(
        'VERIFICATION', 'VERIFICATION'), ('COLLATE', 'COLLATE'), ('SOS-HELP', 'SOS-HELP'), ], max_length=20), null=True)

    preferred_days = ArrayField(models.CharField(choices=[
                                ('MONDAY', 'MONDAY'), ('TUESDAY', 'TUESDAY'), ('WEDNESDAY', 'WEDNESDAY'), ('THURSDAY', 'THURSDAY'), ('FRIDAY', 'FRIDAY'), ('SATURDAY', 'SATURDAY'), ('SUNDAY', 'SUNDAY'), ], max_length=10),  blank=True, null=True)
    preferred_timings = ArrayField(models.CharField(choices=[
        ('7AM-10AM', '7AM-10AM'), ('10AM-1PM', '10AM-1PM'), ('1PM-4PM', '1PM-4PM'), ('4PM-7PM', '4PM-7PM'), ('7PM-9PM', '7PM-9PM'), ('9PM-11PM', '9PM-11PM'), ('11PM-1AM', '11PM-1AM'), ('1AM-3AM', '1AM-3AM'), ('3AM-5AM', '3AM-5AM'), ('5AM-7AM', '5AM-7AM'), ], max_length=10),  blank=True, null=True)

    def __str__(self):
        return self.name
