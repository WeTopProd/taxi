from django.db import models


class Order(models.Model):
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    date_time = models.DateTimeField(auto_now_add=True)
    status = models.BooleanField(default=False)

    class Meta:
        verbose_name = 'Заказ'
        verbose_name_plural = 'Заказы'

    def __str__(self):
        return self.phone


class Driver(models.Model):
    num_car = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    status = models.BooleanField(default=False)
    order = models.ManyToManyField(
        Order,
        verbose_name='Заказ водителя',
        related_name='drivers',
    )

    class Meta:
        verbose_name = 'Водитель'
        verbose_name_plural = 'Водители'

    def __str__(self):
        return self.num_car
