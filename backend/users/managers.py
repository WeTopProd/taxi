from django.contrib.auth.base_user import BaseUserManager


class UserManager(BaseUserManager):
    use_in_migrations = True

    def _create_user(self, phone, car_number, password, **extra_fields):
        if not phone:
            raise ValueError('Поле телефон должно быть задано.')
        if not car_number:
            raise ValueError('Поле гос. номера должно быть задано.')
        user = self.model(phone=phone, car_number=car_number,
                          **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, phone, car_number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(phone, car_number, password,
                                 **extra_fields)

    def create_superuser(self, phone, car_number, first_name=None,
                         last_name=None,
                         password=None, **kwargs):
        user = self.create_user(
            phone,
            car_number,
            first_name=first_name,
            last_name=last_name,
            password=password,
            is_staff=True,
            is_active=True,
            is_superuser=True,
            **kwargs
        )
        return user