import React from 'react';
import styles from "./CarNumber.module.scss";

const CAR_NUMBER = 'e461yk799'

const CarNumber = () => {
  return (
    <div>
      <p className={styles.car_number}>
        {CAR_NUMBER}
      </p>
    </div>
  )
};

export default CarNumber;

