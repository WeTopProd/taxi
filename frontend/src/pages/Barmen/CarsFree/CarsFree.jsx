import React, {useState} from 'react';
import styles from "./CarsFree.module.scss";

const CarsFree = () => {

  const [carsCount, setCarsCount] = useState(3);

  return (
    <div className={styles.cars}>
      <span className={styles.cars__label}></span>
      <span className={styles.cars__count}>{carsCount} машины свободны</span>
    </div>
  )
};


export default CarsFree;
