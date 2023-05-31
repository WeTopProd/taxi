import React from 'react';
import styles from "./CarNumber.module.scss";


const CarNumber = () => {
  return (
    <div>
      <p className={styles.car_number}>
        {localStorage.getItem('car_number')}
      </p>
    </div>
  )
};

export default CarNumber;

