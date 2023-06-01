from django_filters.rest_framework import (FilterSet, MultipleChoiceFilter,
                                           filters)

from .models import Order


class OrderFilter(FilterSet):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        statuses = Order.objects.values_list('status', 'status').distinct()
        self.filters['status'].extra['choices'] = statuses

    status = MultipleChoiceFilter(
        lookup_expr='icontains',
        field_name='status'
    )
    name = filters.CharFilter(lookup_expr='icontains', field_name='name')
    phone = filters.CharFilter(lookup_expr='icontains', field_name='phone')

    class Meta:
        model = Order
        fields = (
            'status',
            'name',
            'phone'
        )
