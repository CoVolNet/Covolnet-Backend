
from django.urls import path, include
from .views import VolunteerView


urlpatterns = [
    path('volunteer/', VolunteerView.as_view()),


]
