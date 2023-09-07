from .views import calculator
from django.urls import path

urlpatterns = [
    path("", calculator, name="calculator"),
]
