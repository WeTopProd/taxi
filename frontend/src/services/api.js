import axios from 'axios';
import { getToken } from './localStorageService';
import { routes } from '../helpers/routes';

export const HOST = 'http://127.0.0.1:8000/api';

export const $api = axios.create({
  baseURL: HOST,
});

$api.interceptors.request.use((config) => {
  config.headers['authorization'] = `Token ${getToken()}`;
  return config;
});

$api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response?.status === 401) {
      alert(
        'Нужно залогиниться. Вы сейчас будете перенаправлены на страницу авторизации',
      );
      window.location.assign(routes.login);
    }
    return Promise.reject(error);
  },
);

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
