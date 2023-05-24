import axios from 'axios';

const URL = 'http://127.0.0.1:8000/api/order/';

async function fetchOrders () {
  console.log('запрос');
  return await axios.get(URL);
}



export {URL, fetchOrders};
