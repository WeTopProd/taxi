from django.contrib.auth.base_user import AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.core.validators import RegexValidator
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

from .managers import UserManager
from .validators import validate_phone_number

RU_NUMBER = (r'^[АВЕКМНОРСТУХABEKMHOPCTYX]'
             r'{1}\d{3}[АВЕКМНОРСТУХABEKMHOPCTYX]{2}\d{2,3}$')


class CustomUser(AbstractBaseUser, PermissionsMixin):
    STATUS_DRIVER = (
        ('free', 'Свободен'),
        ('busy', 'Занят'),
    )
    car_number = models.CharField(
        max_length=15,
        verbose_name='Гос. номер машины',
        validators=[
            RegexValidator(
                regex=RU_NUMBER,
                message='Введите правильный гос. номер машины',
                code='invalid_license_plate'
            )
        ]
    )
    first_name = models.CharField(
        verbose_name='Имя водителя',
        max_length=150
    )
    phone = PhoneNumberField(
        verbose_name='Телефон',
        unique=True,
        validators=[validate_phone_number]
    )
    status = models.CharField(
        verbose_name='Статус водителя',
        max_length=30,
        choices=STATUS_DRIVER,
        default='busy'
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)
    objects = UserManager()
    USERNAME_FIELD = 'phone'

    class Meta:
        verbose_name = 'Водитель'
        verbose_name_plural = 'Водители'
        ordering = ('status',)

    def __str__(self):
        return self.first_name


Driver = CustomUser
