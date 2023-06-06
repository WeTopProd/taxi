import React from 'react';
import { fetchOrdersByPage } from '../../../services/orderService';
import Order from '../Order/Order';
import { useQuery } from '@tanstack/react-query';
import styles from './OrdersList.module.scss';

const OrdersList = ({ orders }) => {
  return (
    <ul className={styles.orders_list}>
      {orders.map((order, index) => {
        return (
          <li className={styles.orders_item} key={index}>
            <Order order={order} />
          </li>
        );
      })}
    </ul>
  );
};

export default OrdersList;
