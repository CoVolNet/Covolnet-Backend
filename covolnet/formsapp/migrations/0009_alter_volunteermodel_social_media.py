# Generated by Django 3.2 on 2021-04-27 16:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formsapp', '0008_rename_preferred_volountary_work_volunteermodel_preferred_work'),
    ]

    operations = [
        migrations.AlterField(
            model_name='volunteermodel',
            name='social_media',
            field=models.CharField(blank=True, max_length=254, null=True),
        ),
    ]
