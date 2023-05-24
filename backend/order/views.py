from rest_framework import viewsets

from .pagination import CustomPagination
from .models import Order
from .serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    pagination_class = CustomPagination
    serializer_class = OrderSerializer

