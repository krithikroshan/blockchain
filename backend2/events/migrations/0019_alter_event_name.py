# Generated by Django 3.2.12 on 2022-04-17 11:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0018_auto_20220223_1351'),
    ]

    operations = [
        migrations.AlterField(
            model_name='event',
            name='name',
            field=models.CharField(blank=True, max_length=128, null=True),
        ),
    ]