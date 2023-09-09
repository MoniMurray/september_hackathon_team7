from django.shortcuts import render
from django.views.generic import TemplateView
from django.views import generic, View
from shop_directory.models import Shop, Category, Location

from django.shortcuts import render

# Create your views here.


# def shop_list(request):
#     shop = Shop.objects.all()
#     category = Category.objects.all()
#     location = Location.objects.all()
#     info = zip(shop, category, location)
#     context = {'info': info, }
#     render(request, 'home.html', context)

# class HomeShopList(generic.ListView):
#     context_object_name = 'home'
#     template_name = 'home.html'
#     queryset = Shop.objects.all()

#     def get_context_data(self, **kwargs):
#         context = super(HomeShopList, self).get_context_data(**kwargs)
#         context['category'] = Category.objects.all()
#         context['location'] = Location.objects.all()

#         return context


# class HomeShopList(generic.ListView):
#     model = Shop
#     template_name = 'home.html'


class HomeShopList(generic.ListView):
    template_name = 'home.html'
    context_object_name = 'category_and_location'
    model = Shop

    def get_context_data(self, **kwargs):
        context = super(HomeShopList, self).get_context_data(**kwargs)
        context.update({
            'category_list': Category.objects.all(),
            'locations_list': Location.objects.all(),
            'shop_list': Shop.objects.all(),
        })
        return context

    def get_queryset(self):
        return Shop.objects.all()


# class CategoryList(generic.ListView):
#     model = Category
#     template_name = 'home.html'
