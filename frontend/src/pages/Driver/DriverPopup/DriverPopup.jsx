import React from 'react';
import styles from './DriverPopup.module.scss';
import { takeNewOrder } from '../../../services/userService';

const DriverPopup = ({ address, orderId }) => {
  const onSubmitOrder = (orderId) => {
    return takeNewOrder(orderId)
      .then((response) => console.log(response))
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
        {
          <div className={styles.btns}>
            <button
              onClick={() => onSubmitOrder(orderId)}
              className={styles.btn}>
              Принять
            </button>
          </div>
        }
      </div>
    </>
  );
};

export default DriverPopup;
