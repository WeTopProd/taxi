import axios from 'axios';
import {useQuery} from '@tanstack/react-query';

const BASE_URL = 'http://127.0.0.1:8000/api/order';

export async function fetchOrders (page = 1) {
  return await axios.get(BASE_URL, {
    params: {
      page: page,
    }
  });
}

export async function submitOrder (data) {
  return await axios.post(BASE_URL, data);
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
