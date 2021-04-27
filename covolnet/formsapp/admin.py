from django.contrib import admin

from .models import VolunteerModel


@admin.register(VolunteerModel)
class AdminVolunteerModel(admin.ModelAdmin):
    list_display = ['name', 'state', 'district',
                    'languages', 'verified', 'created_date']
    search_fields = ['name', 'state', 'district',
                     'languages', 'phone', 'whatsapp', ]
    readonly_fields = ['created_date', ]
