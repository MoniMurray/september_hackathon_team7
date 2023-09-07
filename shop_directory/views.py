from django.shortcuts import render

# Create your views here.


def view_shop_directory(request):
    return render(request, 'shop_directory/shop.html')
