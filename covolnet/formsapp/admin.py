from django.contrib import admin

from .models import VolunteerModel


@admin.register(VolunteerModel)
class AdminVolunteerModel(admin.ModelAdmin):
    list_display = ['name', 'state', 'district',
                    'languages', 'verified', 'active', 'rejected', 'preferred_days', 'preferred_timings', 'preferred_work']
    search_fields = ['name', 'state', 'district',
                     'languages', 'phone', 'whatsapp', 'preferred_days']
    readonly_fields = ['joined_date', ]
