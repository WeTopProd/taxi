import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {$api, HOST} from './api';

const BASE_URL_DRIVERS = `/users/`;
const BASE_URL_TAKE_ORDER = `/takeorder/`;
const BASE_URL_DRIVERS_W_HOST = `${HOST}/users/`;

export const submitAddCar = (data) => axios.post(BASE_URL_DRIVERS_W_HOST, data);

export const fetchCars = () => axios.get(BASE_URL_DRIVERS_W_HOST)
    .then((response) => response?.data);

export const QueryCars = (time) => useQuery({
  queryFn: () => fetchCars(),
  queryKey: ['cars'],
  refetchInterval: time,
  retry: 5,
  onError: (error) => {
    alert(error);
  }
});

export const getDriverInfoByToken = () => $api.get(`${BASE_URL_DRIVERS}me/`);
export const changeDriverDataQuery = (data, carId) => $api.patch(BASE_URL_DRIVERS + `${carId}/`, data);
export const takeNewOrder = (orderId) => $api.post(BASE_URL_TAKE_ORDER + `${orderId}/`);
