import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {$api, HOST} from './api';

const BASE_URL_DRIVERS = `/users/`;
const BASE_URL_DRIVERS_W_HOST = `${HOST}/users/`;
const BASE_URL_DRIVER_INFO_BY_TOKEN = `/users/me/`;

export async function submitAddCar(data) {
  return await axios.post(BASE_URL_DRIVERS_W_HOST, data);
}

export async function fetchCars() {
  return await axios.get(BASE_URL_DRIVERS_W_HOST);
}

export const QueryCars = (time) => useQuery({
  queryFn: () => fetchCars()
    .then((response) => {
      return response?.data;
    }),
  queryKey: ['cars'],
  refetchInterval: time,
  retry: 5,
  onError: (error) => {
    alert(error);
  }
});

export function getDriverInfoByToken() {
  return $api.get(BASE_URL_DRIVER_INFO_BY_TOKEN);
}

export function changeDriverDataQuery(data, carId) {
  return $api.patch(BASE_URL_DRIVERS + `${carId}/`, data);
}
