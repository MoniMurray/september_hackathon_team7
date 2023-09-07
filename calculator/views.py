from django.shortcuts import render

# Create your views here.
def view_calculator(request):
    """
    A view that renders the calculator page
    """

    return render(request, 'calculator/calculator.html')
