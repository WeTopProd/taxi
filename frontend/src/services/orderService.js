import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { HOST } from './api';

const BASE_URL_ORDERS = `${HOST}/orders/`;

export async function fetchOrders(page = 1) {
  return await axios.get(BASE_URL_ORDERS, {
    params: {
      page: page,
    },
  });
}

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
      alert(error);
    },
  });
