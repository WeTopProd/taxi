import React from 'react';
import styles from "./OrdersNew.module.scss";
import {useDispatcherContext} from '../DispatcherContext';


const OrdersNew = () => {

  const {newOrders, isLoading} = useDispatcherContext();

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
