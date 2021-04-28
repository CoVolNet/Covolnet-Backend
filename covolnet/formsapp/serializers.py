from rest_framework import serializers
from .models import VolunteerModel


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerModel
        fields = '__all__'
        read_only_fields = ['joined_date', 'verified', 'active', 'rejected']
        extra_kwargs = {'preferred_days': {'required': True},
                        'preferred_timings': {'required': True},
                        'preferred_work': {'required': True},
                        'discord_community': {'required': True}, }
