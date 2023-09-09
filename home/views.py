from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import generic, View
from shop_directory.models import Shop

from django.shortcuts import render

# Create your views here.


class HomeShopList(generic.ListView):
    model = Shop
    template_name = 'home.html'
