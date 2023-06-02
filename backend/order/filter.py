from django_filters.rest_framework import FilterSet, filters

from .models import Order
from users.models import Driver


class OrderFilter(FilterSet):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        drivers_id = Driver.objects.values_list('id', flat=True).distinct()
        self.filters['driver_id'].extra['choices'] = drivers_id

    name = filters.CharFilter(
        lookup_expr='icontains',
        field_name='name'
    )
    phone = filters.CharFilter(
        lookup_expr='icontains',
        field_name='phone'
    )
    address = filters.CharFilter(
        lookup_expr='icontains',
        field_name='address'
    )
    date_time = filters.DateTimeFilter(
        field_name='date_time',
        lookup_expr='range'
    )
    status = filters.ChoiceFilter(
        choices=Order.STATUS_ORDER,
        field_name='status'
    )
    driver_id = filters.MultipleChoiceFilter(
        field_name='driver'
    )

    class Meta:
        model = Order
        fields = (
            'status',
            'driver_id',
            'name',
            'phone',
            'address',
            'date_time'
        )
