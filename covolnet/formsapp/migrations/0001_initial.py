# Generated by Django 3.2 on 2021-04-26 15:27

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='VolunteerRegistration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=100)),
                ('district', models.CharField(max_length=100)),
                ('languages', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=100), size=None)),
                ('phone', models.IntegerField()),
                ('whatsapp', models.IntegerField()),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('verified', models.BooleanField(default=False)),
            ],
        ),
    ]