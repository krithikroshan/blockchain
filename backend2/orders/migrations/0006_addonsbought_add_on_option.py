# Generated by Django 3.2.4 on 2021-09-30 16:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0010_addonoption_image'),
        ('orders', '0005_alter_ticket_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='addonsbought',
            name='add_on_option',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='events.addonoption'),
        ),
    ]
