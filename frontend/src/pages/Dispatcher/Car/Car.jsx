import React from 'react';
import styles from './Car.module.scss';
import carBusyIMG from '../../../assets/img/car_busy.png';
import carFreeIMG from '../../../assets/img/car_free.png';
import cx from 'classnames';

const STATUS_NAMES = {
  free: 'свободен',
  busy: 'занят',
};

const Car = ({ driverName, driverPhone, carNumber, status }) => {
  return (
    <div className={styles.car}>
      <div className={styles.image}>
        <h3 className={styles.title}>Автомобиль</h3>
        <img
          src={status === 'free' ? carFreeIMG : carBusyIMG}
          width="85"
          height="64"
          alt="такси"
        />
        <p className={styles.number}>{carNumber}</p>
      </div>

      <div>
        <h3 className={styles.title}>Имя</h3>
        <p className={styles.text}>{driverName}</p>
        <h3 className={styles.title}>Телефон</h3>
        <p className={styles.text}>{driverPhone}</p>
        <h3 className={styles.title}>Статус</h3>
        <p className={styles.text}>
          <span
            className={cx(
              styles.status,
              status === 'free' ? styles.status_free : '',
            )}></span>
          <b>{STATUS_NAMES[status]}</b>
        </p>
      </div>
    </div>
  );
};

export default Car;
