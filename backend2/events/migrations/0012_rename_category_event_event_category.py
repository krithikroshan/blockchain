# Generated by Django 3.2.4 on 2021-10-15 00:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0011_auto_20211015_0010'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='category',
            new_name='event_category',
        ),
    ]
