from django.urls import path
from . import views


urlpatterns = [
    path('all_shops/', views.ShopList.as_view(), name='all_shops'),
    path('add_shop/', views.add_shop, name='add_shop'),

]
