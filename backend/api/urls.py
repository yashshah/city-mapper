"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.10/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import *
from api.disruptions import views
from rest_framework.urlpatterns import format_suffix_patterns


# This two if you want to enable the Django Admin: (recommended)
from django.contrib import admin
admin.autodiscover()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^disruptions/$', views.disruption_list),
    url(r'^disruptions/(?P<pk>[0-9]+)$', views.disruption_detail),
]
urlpatterns = format_suffix_patterns(urlpatterns)