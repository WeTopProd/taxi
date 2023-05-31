from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend

from .filter import OrderFilter
from .pagination import CustomPagination
from .models import Order
from .serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    pagination_class = CustomPagination
    serializer_class = OrderSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = OrderFilter
