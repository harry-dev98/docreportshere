# Generated by Django 3.1.1 on 2021-01-15 12:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0006_chat'),
    ]

    operations = [
        migrations.AlterField(
            model_name='chat',
            name='isNotification',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='patient',
            name='isAssigned',
            field=models.BooleanField(default=False),
        ),
    ]
