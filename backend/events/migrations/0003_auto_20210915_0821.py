# Generated by Django 3.2.4 on 2021-09-15 08:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0002_auto_20210913_1718'),
    ]

    operations = [
        migrations.RenameField(
            model_name='event',
            old_name='user_id',
            new_name='owner_id',
        ),
        migrations.AlterField(
            model_name='tickettypeaddon',
            name='add_on_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='events.addon'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='tickettypeaddon',
            name='ticket_type_id',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='events.tickettype'),
            preserve_default=False,
        ),
    ]
