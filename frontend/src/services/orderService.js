import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { HOST } from './api';

const BASE_URL_ORDERS = `${HOST}/orders/`;

export async function fetchOrdersByPage(page = 1) {
  return await axios.get(BASE_URL_ORDERS, {
    params: {
      page: page,
    },
  });
}

export const fetchOrdersByDriver = (carId) => {
  return axios.get(BASE_URL_ORDERS, {
    params: {
      driver: carId,
    },
  });
};

export const fetchNewOrders = (status = '') =>
  axios
    .get(BASE_URL_ORDERS, {
      params: {
        status: status,
      },
    })
    .then(({ data }) => data?.results);

export async function submitOrder(data) {
  return await axios.post(BASE_URL_ORDERS, data);
}

export const QueryNewOrders = (time) =>
  useQuery({
    queryFn: () => fetchNewOrders('new'),
    queryKey: ['newOrders'],
    refetchInterval: time,
    retry: 5,
    onError: (error) => {
      console.error(error);
    },
  });

export async function changeOrderStatus(order_id, order_status) {
  return await axios.patch(BASE_URL_ORDERS + `${order_id}/`, {
    status: order_status,
  });
}

export async function orderRequestByDispatcher(order_id, driver_id) {
  return await axios.patch(BASE_URL_ORDERS + `${order_id}/`, {
    driver: driver_id,
  });
}
