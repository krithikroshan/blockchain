# Generated by Django 3.2.12 on 2022-02-26 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0009_promosredeemed'),
    ]

    operations = [
        migrations.AlterField(
            model_name='promosredeemed',
            name='token_id',
            field=models.CharField(blank=True, max_length=64, null=True),
        ),
    ]
