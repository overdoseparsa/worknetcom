# Generated by Django 5.1.4 on 2025-01-28 09:08

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Connection', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contentconnection',
            name='answer_time',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='contentconnection',
            name='created',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AddField(
            model_name='contentconnection',
            name='status',
            field=models.BooleanField(null=True),
        ),
        migrations.AlterField(
            model_name='contentconnection',
            name='Appendix',
            field=models.FileField(null=True, upload_to=''),
        ),
    ]
