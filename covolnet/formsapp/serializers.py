from rest_framework import serializers
from .models import VolunteerModel


class VolunteerSerializer(serializers.ModelSerializer):
    class Meta:
        model = VolunteerModel
        fields = '__all__'
        read_only_fields = ['joined_date', 'verified', 'active', 'rejected']
