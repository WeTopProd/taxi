import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { $api, HOST } from './api';

const BASE_URL_DRIVERS = `/users/`;
const BASE_URL_TAKE_ORDER = `/take-order/`;
const BASE_URL_CANCEL_ORDER = `/cancel-order/`;
const BASE_URL_REFUSE_ORDER = `/refuse-order/`;
const BASE_URL_COMPLETE_ORDER = `/complete-order/`;
const BASE_URL_DRIVERS_W_HOST = `${HOST}/users/`;

export const submitAddCar = (data) => axios.post(BASE_URL_DRIVERS_W_HOST, data);

export const fetchCars = () =>
  axios.get(BASE_URL_DRIVERS_W_HOST).then((response) => response?.data);

export const QueryCars = (time) =>
  useQuery({
    queryFn: () => fetchCars(),
    queryKey: ['cars'],
    refetchInterval: time,
    retry: 5,
    onError: (error) => {
      alert(error);
    },
  });

export const getDriverInfoByToken = () => $api.get(`${BASE_URL_DRIVERS}me/`);
export const changeDriverDataQuery = (data, carId) =>
  $api.patch(BASE_URL_DRIVERS + `${carId}/`, data);
export const takeOrderByDriver = (orderId) =>
  $api.post(BASE_URL_TAKE_ORDER + `${orderId}/`);
export const refuseOrderByDriver = (orderId, comment) =>
  $api.post(BASE_URL_REFUSE_ORDER + `${orderId}/`, { comment: comment });
export const completeOrderByDriver = (orderId) =>
  $api.post(BASE_URL_COMPLETE_ORDER + `${orderId}/`);
