# Generated by Django 4.2.7 on 2023-11-25 11:09

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("bsk_app", "0004_remove_userprofile_flower_pot_number_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="flowerpot",
            name="pot_number",
            field=models.IntegerField(primary_key=True, serialize=False),
        ),
    ]
