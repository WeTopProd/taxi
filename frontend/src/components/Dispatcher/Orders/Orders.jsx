import React, {useEffect, useRef, useState} from 'react';
import styles from "./Orders.module.scss";
import cx from "classnames";

const ordersList = [
  {
    id: '1',
    name: 'Александр',
    phone: '+79031234567',
    status: 'Ожидает'
  },
  {
    id: '2',
    name: 'Андрей',
    phone: '+79033333333',
    status: 'Принят'
  },
  {
    id: '3',
    name: 'Михаил',
    phone: '+79034444444',
    status: 'Отменен'
  },
  {
    id: '4',
    name: 'Маргарита',
    phone: '+79034444в444',
    status: 'Принят'
  },
  {
    id: '5',
    name: 'Артем',
    phone: '+79034444в444',
    status: 'Принят'
  },
  {
    id: '6',
    name: 'Николай',
    phone: '+79034444в444',
    status: 'Принят'
  },
  {
    id: '7',
    name: 'Маргарита',
    phone: '+79034444в444',
    status: 'Принят'
  },
  {
    id: '8',
    name: 'Маргарита',
    phone: '+79034444в444',
    status: 'Принят'
  },
  {
    id: '9',
    name: 'Маргарита',
    phone: '+79034444в444',
    status: 'Принят'
  },
  {
    id: '10',
    name: 'Маргарита',
    phone: '+79034444в444',
    status: 'Принят'
  },
  {
    id: '11',
    name: 'Маргарита',
    phone: '+79034444в444',
    status: 'Принят'
  },
];

const Orders = () => {
  const [isOpenOrders, setIsOpenOrders] = useState(false);

  const ordersRef = useRef(null);
  const btnRef = useRef(null);

// Hook
  function useOnClickOutside(refPopup, refBtn, handler) {
    useEffect(() => {
        const listener = (event) => {
          // Do nothing if clicking ref's element or descendent elements
          if (!refPopup.current || refPopup.current.contains(event.target) || event.target === refBtn.current) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [refPopup, btnRef, handler]);
  }

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
                  ordersList.map((orderItem, index) =>
                    <tr key={index}>
                      <td className={styles.orders_id}>{orderItem.id}</td>
                      <td className={styles.orders_name}>{orderItem.name}</td>
                      <td className={styles.orders_phone}>{orderItem.phone}</td>
                      <td className={styles.orders_status}>{orderItem.status}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>)}
    </>
  )
};

export default Orders;
