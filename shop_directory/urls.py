from django.urls import path
from . import views


urlpatterns = [
    path('', views.view_shop_directory, name='view_shop_directory')
]
