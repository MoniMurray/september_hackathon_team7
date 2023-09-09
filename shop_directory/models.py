from django.db import models
from django.contrib.auth.models import User
from cloudinary.models import CloudinaryField

# Create your models here.


class Shop(models.Model):
    username = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="shop")
    shop_name = models.CharField(max_length=200)
    description = models.CharField(max_length=200)
    company_address = models.CharField(max_length=200)
    eircode = models.CharField(max_length=10, unique=True)
    image = CloudinaryField('image', default='placeholder')
    category = models.ForeignKey("Category", null=True, blank=True, on_delete=models.SET_NULL)
    location = models.ForeignKey("Location", null=True, blank=True, on_delete=models.SET_NULL)

    def __str__(self):
        return self.shop_name


class Category(models.Model):
    class Meta:
        verbose_name_plural = 'Categories'

    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Location(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name
