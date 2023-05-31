import axios from 'axios';
import {useQuery} from '@tanstack/react-query';
import {getToken} from './localStorageService';

const HOST = 'http://127.0.0.1:8000/api'
const BASE_URL_ORDERS = `${HOST}/orders/`;
const BASE_URL_DRIVERS = `/users/`;
const BASE_URL_DRIVERS_W_HOST = `${HOST}/users/`;
const BASE_URL_DRIVER_INFO_BY_TOKEN = `/users/me/`;
const BASE_URL_DRIVER_LOGIN = `${HOST}/auth/token/login/`;
const BASE_URL_DRIVER_LOGOUT = `/auth/token/logout/`;


export const $api = axios.create({
  baseURL: HOST
});

$api.interceptors.request.use((config) => {
  config.headers['authorization'] = `Token ${getToken()}`;
  return config;
});

// $api.interceptors.response.use((response) => {
//   if (response.data.error_text === 'Access deny') {
//     alert('Нужно залогиниться. Вы сейчас будете перенаправлены на страницу авторизации');
//     window.location.assign(routes.login);
//   }
//   return response;
// });




export async function fetchOrders (page = 1) {
  return await axios.get(BASE_URL_ORDERS, {
    params: {
      page: page,
    }
  });
}

export async function submitOrder (data) {
  return await axios.post(BASE_URL_ORDERS, data);
}

export const QueryNewOrders = (time) => useQuery({
  queryFn: () => fetchOrders()
    .then((data) => {
      return data?.data.results
    }),
  queryKey: ["newOrders"],
  refetchInterval: time,
  retry: 5,
  onError: (error) => {alert(error)}
});


export async function submitAddCar (data) {
  return await axios.post(BASE_URL_DRIVERS_W_HOST, data);
}

export async function fetchCars () {
  return await axios.get(BASE_URL_DRIVERS_W_HOST);
}

export const QueryCars = (time) => useQuery({
  queryFn: () => fetchCars()
    .then((response) => {
      return response?.data
    }),
  queryKey: ["cars"],
  refetchInterval: time,
  retry: 5,
  onError: (error) => {alert(error)}
});


export function getDriverInfoByToken () {
  return $api.get(BASE_URL_DRIVER_INFO_BY_TOKEN)
}

export function loginQuery(phone, password) {
  return axios.post(BASE_URL_DRIVER_LOGIN,
    {
      phone: phone,
      password: password
    }
  )
}

export function logoutQuery() {
  return $api.post(
    BASE_URL_DRIVER_LOGOUT,
    {},
  )
}

export function changeDriverDataQuery(token, data, carId) {
  return $api.patch(BASE_URL_DRIVERS + `${carId}/`,
    {
      data
    }
  )
}











// export const {data: orders = [], isLoading} = useQuery({
//   queryFn: () => fetchOrders()
//     .then((data) => {
//       setPrevPage(data?.data.previous);
//       setNextPage(data?.data.next);
//       return data?.data.results
//     }),
//   queryKey: ["orders"],
//   refetchInterval: 3000,
//   retry: 5,
//   onError: (error) => {alert(error)}
// });
