"""covolnet URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.views.generic.base import TemplateView


# default: "Django Administration"
admin.site.site_header = 'CoVolNet'
# default: "Site administration"
admin.site.index_title = 'CoVolNet'
# default: "Django site admin"
admin.site.site_title = 'CoVolNet'


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/forms/', include('formsapp.urls')),
    # path('api-auth/', include('rest_framework.urls')),



    # Templates
    path('', TemplateView.as_view(template_name='index.html')),
    path('index.html', TemplateView.as_view(template_name='index.html')),
    path('Ambulance.html', TemplateView.as_view(
        template_name='Ambulance.html')),
    path('form.html', TemplateView.as_view(template_name='form.html')),
    path('O2.html', TemplateView.as_view(template_name='O2.html')),
    path('2ndform.html', TemplateView.as_view(template_name='2ndform.html')),
    path('rapidindex.html', TemplateView.as_view(
        template_name='rapidindex.html')),
    path('requesthelp.html', TemplateView.as_view(
        template_name='requesthelp.html')),





]
