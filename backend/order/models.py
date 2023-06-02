from django.db import models

from users.models import Driver


class Order(models.Model):
    STATUS_ORDER = (
        ('new', 'Новый'),
        ('confirmed', 'Подтвержден'),
        ('complete', 'Завершен'),
        ('canceled', 'Отменен'),
    )
    name = models.CharField(
        max_length=255,
        verbose_name='Имя заказчика'
    )
    phone = models.CharField(
        max_length=255,
        verbose_name='Номер заказчика'
    )
    address = models.CharField(
        max_length=500,
        verbose_name='Адрес'
    )
    date_time = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Дата и время'
    )
    status = models.CharField(
        max_length=30,
        choices=STATUS_ORDER,
        default='new',
        verbose_name='Статус заказа'
    )
    driver = models.ForeignKey(
        Driver,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        verbose_name='Водитель'
    )

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
        ordering = ['-date_time']

    def __str__(self):
        return f'Заказ по адресу {self.address}'
