from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import OrderViewSet, TakeOrderView

router = DefaultRouter()
router.register('orders', OrderViewSet)

urlpatterns = [
    path(
        'takeorder/<int:order_id>/',
        TakeOrderView.as_view(),
        name='take-order'
    ),
    path('', include(router.urls)),
]
