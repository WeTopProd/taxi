import React from 'react';
import styles from "./Car.module.scss";
import carBusyIMG from '../../../assets/img/car_busy.png';
import carFreeIMG from '../../../assets/img/car_free.png';
import cx from 'classnames';


const Car = ({number, status}) => {

  return (
    <div className={styles.car}>
      <div className={styles.image}>
        <img
          src={status==='свободен' ? carFreeIMG : carBusyIMG}
          width="85"
          height="64"
          alt="такси"
        />
      </div>

      <div>
        <h3 className={styles.title}>Автомобиль</h3>
        <p className={styles.number}>{number}</p>
        <h3 className={styles.title}>Статус</h3>
        <p className={styles.status_text}>
          <span className={cx(styles.status, status==='свободен' ? styles.status_free : '')}></span>
          <b>{status}</b>
        </p>
      </div>
    </div>
  )
};


export default Car;
