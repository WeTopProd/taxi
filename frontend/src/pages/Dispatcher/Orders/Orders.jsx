import React, {useRef, useState} from 'react';
import styles from "./Orders.module.scss";
import cx from "classnames";
import {useQuery} from '@tanstack/react-query';
import {useOnClickOutside} from '../../../services/hooks';
import {fetchOrders} from '../../../services/api';


const Orders = () => {
  const [isOpenOrders, setIsOpenOrders] = useState(false);
  const [page, setPage] = useState(1);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const {data: orders = [], isLoading} = useQuery({
    queryFn: () => fetchOrders(page)
      .then((data) => {
        setPrevPage(data?.data.previous);
        setNextPage(data?.data.next);
        return data?.data.results
      }),
    queryKey: ["orders", page],
    refetchInterval: 3000,
    retry: 5,
    onError: (error) => {alert(error)}
  });

  console.log(nextPage);

  const ordersRef = useRef(null);
  const btnRef = useRef(null);

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ordersRef, btnRef, () => setIsOpenOrders(false));

  const onClickOrdersHandler = () => {
    setIsOpenOrders(!isOpenOrders);
  };

  return (
    <>
      <button ref={btnRef} className={cx(styles.btn, isOpenOrders ? styles.active : '')} onClick={onClickOrdersHandler}>История заказов</button>
      { isOpenOrders &&
        (<div ref={ordersRef} className={styles.orders_popup}>
          <div className={styles.orders_list}>
            <table>
              <thead>
                <tr>
                  <th className={styles.orders_id}>Номер заказа</th>
                  <th className={styles.orders_name}>Имя клиента</th>
                  <th className={styles.orders_phone}>Телефон клиента</th>
                  <th className={styles.orders_status}>Статус заказа</th>
                </tr>
              </thead>
            </table>
            <div className={styles.orders_list_scroll}>
              <table>
                <tbody>
                {
                  isLoading ? (
                    <tr><td>Данные загружаются</td></tr>
                    ) :
                    orders.map((orderItem, index) =>
                    <tr key={index}>
                      <td className={styles.orders_id}>{orderItem.id}</td>
                      <td className={styles.orders_name}>{orderItem.name}</td>
                      <td className={styles.orders_phone}>{orderItem.phone}</td>
                      <td className={styles.orders_status}>{orderItem.status}</td>
                    </tr>
                  )}
                   <tr>
                     <td className={styles.btns} colSpan={4}>
                       <button onClick={() => setPage(page-1)} disabled={!prevPage}>Предыдущая страница</button>
                       <button onClick={() => setPage(page+1)} disabled={!nextPage}>Следующая страница</button>
                     </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>)}
    </>
  )
};

export default Orders;
