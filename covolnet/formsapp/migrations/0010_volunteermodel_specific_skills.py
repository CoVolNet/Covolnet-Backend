# Generated by Django 3.2 on 2021-04-27 17:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('formsapp', '0009_alter_volunteermodel_social_media'),
    ]

    operations = [
        migrations.AddField(
            model_name='volunteermodel',
            name='specific_skills',
            field=models.TextField(null=True),
        ),
    ]
