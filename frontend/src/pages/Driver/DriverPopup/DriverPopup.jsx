import React from 'react';
import styles from "./DriverPopup.module.scss";


const DriverPopup = ({address, orderId}) => {

  return (
    <>
      <div className={styles.driver_popup}>
        <h3>Заказ N{orderId}</h3>
        <p><b>Адрес:</b><br/><br/> {address}</p>
      {
        <div className={styles.btns}>
          <button className={styles.btn}>Принять</button>
        </div>
      }
      </div>
    </>
  )
};

export default DriverPopup;
