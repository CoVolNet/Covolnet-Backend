# Generated by Django 3.2 on 2021-04-28 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formsapp', '0011_auto_20210428_1531'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteermodel',
            name='email',
            field=models.EmailField(max_length=254, null=True),
        ),
    ]
