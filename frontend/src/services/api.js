import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const BASE_URL_ORDERS = 'http://127.0.0.1:8000/api/orders/';
const BASE_URL_CARS = 'http://127.0.0.1:8000/api/users/';

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
      // console.log('orders', data);
      return data?.data.results
    }),
  queryKey: ["newOrders"],
  refetchInterval: time,
  retry: 5,
  onError: (error) => {alert(error)}
});


export async function submitAddCar (data) {
  return await axios.post(BASE_URL_CARS, data);
}

export async function fetchCars () {
  return await axios.get(BASE_URL_CARS);
}

export const QueryCars = (time) => useQuery({
  queryFn: () => fetchCars()
    .then((response) => {
      // console.log('cars', response);
      return response?.data
    }),
  queryKey: ["cars"],
  refetchInterval: time,
  retry: 5,
  onError: (error) => {alert(error)}
});


















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
