# Generated by Django 3.2.21 on 2023-09-08 18:48

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('shop_directory', '0002_alter_category_options'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='username',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shop', to=settings.AUTH_USER_MODEL),
        ),
    ]