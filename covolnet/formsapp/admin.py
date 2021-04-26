from django.contrib import admin

from .models import VolunteerRegistration


@admin.register(VolunteerRegistration)
class model_nameVolunteerRegistration(admin.ModelAdmin):
    list_display = ['name', 'state', 'district',
                    'languages', 'verified', ]
    search_fields = ['name', 'state', 'district',
                     'languages', 'phone', 'whatsapp', ]
    readonly_fields = ['created_date', ]
