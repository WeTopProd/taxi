import React, {useEffect, useRef, useState} from 'react';
import styles from "./OrdersNew.module.scss";
import cx from "classnames";
import {useQuery} from '@tanstack/react-query';
import {useOnClickOutside} from '../../../services/hooks';
import {fetchOrders} from '../../../services/api';


const OrdersNew = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState([]);


  const fetchOrderList = () => {
    setIsLoading(true);

    fetchOrders()
      .then((data) => {
        setOrders(data?.data.results);
        console.log(isLoading);
      })
      .then(() => setIsLoading(false))
      .catch((error) => {
        alert(error);
      })
  }

  useEffect(() => {
    fetchOrderList();
  }, [])


  return (
      <>
        <div className={styles.orders_table}>
          <table>
            <thead>
            <tr>
              <th className={styles.orders_id}>Номер заказа</th>
              <th className={styles.orders_name}>Имя клиента</th>
              <th className={styles.orders_phone}>Телефон клиента</th>
              <th className={styles.orders_status}>Статус заказа</th>
            </tr>
            </thead>
            <tbody>
              {
                isLoading ? <tr><td>Данные загружаются</td></tr> :
                  orders.map((orderItem, index) =>
                    <tr key={index}>
                      <td className={styles.orders_id}>{orderItem.id}</td>
                      <td className={styles.orders_name}>{orderItem.name}</td>
                      <td className={styles.orders_phone}>{orderItem.phone}</td>
                      <td className={styles.orders_status}>{orderItem.status}</td>
                    </tr>)
              }
            </tbody>
          </table>
        </div>
      </>
    )

};

export default OrdersNew;
