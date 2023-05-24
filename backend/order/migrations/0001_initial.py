# Generated by Django 3.2 on 2023-05-19 16:37

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=255)),
                ('address', models.CharField(max_length=255)),
                ('date_time', models.DateTimeField(auto_now_add=True)),
                ('status', models.BooleanField(default=False)),
            ],
            options={
                'verbose_name': 'Заказ',
                'verbose_name_plural': 'Заказы',
            },
        ),
        migrations.CreateModel(
            name='Driver',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('num_car', models.CharField(max_length=255)),
                ('first_name', models.CharField(max_length=255)),
                ('phone', models.CharField(max_length=255)),
                ('status', models.BooleanField(default=False)),
                ('order', models.ManyToManyField(related_name='drivers', to='order.Order', verbose_name='Заказ водителя')),
            ],
            options={
                'verbose_name': 'Водитель',
                'verbose_name_plural': 'Водители',
            },
        ),
    ]