import React, { useState } from 'react';
import styles from './DriverPopup.module.scss';
import { changeOrderStatus } from '../../../services/orderService';

const DriverPopup = ({ address, orderId }) => {
  const [isExecutingOrder, setIsExecutingOrder] = useState(false);

  const onSubmitOrder = (orderId) => {
    return changeOrderStatus(orderId, 'confirmed')
      .then((response) => setIsExecutingOrder(true))
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  const onCompleteOrder = (orderId) => {
    return changeOrderStatus(orderId, 'complete')
      .then((response) => setIsExecutingOrder(false))
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  const onCancelOrder = (orderId) => {
    return changeOrderStatus(orderId, 'new')
      .then((response) => {
        setIsExecutingOrder(false);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };

  return (
    <>
      <div className={styles.driver_popup}>
        <h3>Заказ N{orderId}</h3>
        <p>
          <b>Адрес:</b>
          <br />
          <br /> {address}
        </p>
        <div className={styles.btns}>
          {isExecutingOrder ? (
            <button
              onClick={() => onCompleteOrder(orderId)}
              className={styles.btn}>
              Завершить заказ
            </button>
          ) : (
            <div className={styles.btns_submit}>
              <button
                onClick={() => onSubmitOrder(orderId)}
                className={styles.btn}>
                Подтвердить заказ
              </button>
              <button
                onClick={() => onCancelOrder(orderId)}
                className={styles.btn}>
                Отклонить
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DriverPopup;
