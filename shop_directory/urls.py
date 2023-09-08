from django.urls import path
from . import views


urlpatterns = [
    path('', views.view_shop_directory, name='view_shop_directory'),
    path('add_shop/', views.add_shop, name='add_shop'),

]
