# Generated by Django 3.2.2 on 2021-05-10 21:56

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Wharehouse',
            fields=[
                ('id', models.AutoField(db_column='id', primary_key=True, serialize=False, unique=True, verbose_name='Wharehouse Id')),
                ('name', models.CharField(db_column='name', help_text='Wharehouse name', max_length=50, verbose_name='Wharehouse name')),
                ('address', models.TextField(db_column='address', help_text='Wharehouse address', verbose_name='Wharehouse address')),
                ('status', models.BooleanField(db_column='status', default=True, help_text='Availability of the wharehouse', verbose_name='Wharehouse status')),
            ],
            options={
                'verbose_name': 'wharehouse',
                'verbose_name_plural': 'wharehouses',
                'db_table': 'wharehouses',
                'ordering': ['name', 'address'],
                'unique_together': {('name', 'address')},
            },
        ),
    ]
