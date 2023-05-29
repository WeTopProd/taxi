from django.db import models

from users.models import Driver


class Order(models.Model):
    STATUS_ORDER = (
        ('new', 'Новый'),
        ('confirmed', 'Подтвержден'),
        ('canceled', 'Отменен'),
    )
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=500)
    date_time = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=30,
        choices=STATUS_ORDER,
        default='new'
    )
    driver = models.ForeignKey(
        Driver,
        on_delete=models.SET_NULL,
        null=True,
        blank=True
    )

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'
        ordering = ['-date_time']

    def __str__(self):
        return f'Заказ по адресу {self.address}'
