# Generated by Django 3.2.12 on 2022-02-19 19:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0016_tickettype_add_ons'),
        ('blockchain', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CollectionEventPromo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('collection', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blockchain.collection')),
                ('event_promo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.eventpromo')),
            ],
        ),
        migrations.DeleteModel(
            name='CollectionPromo',
        ),
    ]
