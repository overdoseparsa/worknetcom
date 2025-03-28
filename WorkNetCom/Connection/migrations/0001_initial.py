# Generated by Django 5.1.4 on 2025-01-28 09:02

import Connection.models
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ContentConnection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=125)),
                ('phone', models.CharField(max_length=11)),
                ('body_text', models.TextField()),
                ('email', models.EmailField(max_length=254, validators=[Connection.models.mail_validator])),
                ('Appendix', models.FileField(upload_to='')),
            ],
        ),
    ]
