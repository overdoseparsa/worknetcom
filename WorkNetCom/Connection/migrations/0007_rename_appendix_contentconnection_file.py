# Generated by Django 5.1.4 on 2025-02-04 08:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Connection', '0006_alter_contentconnection_link'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contentconnection',
            old_name='Appendix',
            new_name='file',
        ),
    ]
