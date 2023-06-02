# Generated by Django 3.2 on 2023-06-02 13:00

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
                ('name', models.CharField(max_length=255, verbose_name='Имя заказчика')),
                ('phone', models.CharField(max_length=255, verbose_name='Номер заказчика')),
                ('address', models.CharField(max_length=500, verbose_name='Адрес')),
                ('date_time', models.DateTimeField(auto_now_add=True, verbose_name='Дата и время')),
                ('status', models.CharField(choices=[('new', 'Новый'), ('confirmed', 'Подтвержден'), ('complete', 'Завершен'), ('canceled', 'Отменен')], default='new', max_length=30, verbose_name='Статус заказа')),
            ],
            options={
                'verbose_name': 'Заказ',
                'verbose_name_plural': 'Заказы',
                'ordering': ['-date_time'],
            },
        ),
    ]
