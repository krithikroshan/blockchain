# Generated by Django 3.2.4 on 2021-09-16 11:18

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0006_auto_20210916_1117'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='event',
            name='category',
        ),
    ]
