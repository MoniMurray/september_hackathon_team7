from django.urls import path
from . import views


urlpatterns = [
    path('', views.HomeShopList.as_view(), name='home'),
]
