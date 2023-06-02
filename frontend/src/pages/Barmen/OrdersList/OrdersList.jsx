import React from 'react';
import { fetchOrders } from '../../../services/orderService';
import Order from '../Order/Order';
import { useQuery } from '@tanstack/react-query';

const OrdersList = () => {
  const { data: orders = [] } = useQuery({
    queryFn: () => fetchOrders(1),
    queryKey: ['orders'],
    refetchInterval: 3000,
    retry: 5,
    onError: (error) => {
      alert('Не удалось загрузить список заказов');
    },
  });

  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order, index) => {
          return <Order key={index} order={order} />;
        })
      ) : (
        <span>Нет заказов</span>
      )}
    </div>
  );
};

export default OrdersList;
