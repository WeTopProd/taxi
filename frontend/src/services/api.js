import axios from 'axios';

const URL = 'http://127.0.0.1:8000/api/order/?page=';

async function fetchOrders (page = 1) {
  console.log('запрос');
  return await axios.get(URL + page);
}


export {URL, fetchOrders};
