from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import status, viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .filter import OrderFilter
from .models import Order
from .pagination import CustomPagination
from .serializers import OrderSerializer


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    pagination_class = CustomPagination
    serializer_class = OrderSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = OrderFilter


class TakeOrderView(APIView):
    def post(self, request, order_id):
        driver = request.user
        try:
            order = Order.objects.get(id=order_id)
        except Order.DoesNotExist:
            return Response({'error': 'Заказ не найден'},
                            status=status.HTTP_404_NOT_FOUND)
        if order.status != 'new':
            return Response({'error': 'Заказ уже занят или подтвержден'},
                            status=status.HTTP_400_BAD_REQUEST)
        if driver.status != 'free':
            return Response({'error': 'Водитель уже занят'},
                            status=status.HTTP_400_BAD_REQUEST)
        if order.driver is not None:
            return Response({'error': 'Заказ уже занят другим водителем'},
                            status=status.HTTP_400_BAD_REQUEST)
        order.status = 'confirmed'
        order.driver = driver
        order.save()
        driver.status = 'busy'
        driver.save()
        return Response({'message': 'Заказ успешно принят и подтвержден',
                         'order_id': order.id}, status=status.HTTP_200_OK)
