# Generated by Django 3.2.4 on 2021-09-18 20:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0009_auto_20210918_1234'),
    ]

    operations = [
        migrations.AddField(
            model_name='addonoption',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
