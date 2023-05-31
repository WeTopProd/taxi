import React, {useState} from 'react';
import styles from "./CarsFree.module.scss";
import cx from 'classnames';
import {declOfNum} from '../../../services/declOfNum';

const CARS_DECL = [
  'свободная машина',
  'свободные машины',
  'свободных машин'
]

const CarsFree = () => {

  const [carsCount, setCarsCount] = useState(0);

  return (
    <div className={styles.cars}>
      <span className={cx(styles.cars_label, carsCount ? '' : styles.cars_label__busy)}></span>

        {
          carsCount ?
            <span className={styles.cars_count}>
              {carsCount} {declOfNum(carsCount, CARS_DECL)}
            </span> :
            <span className={cx(styles.cars_count, styles.cars_count__busy)}>
              нет свободных машин
            </span>
        }

    </div>
  )
};


export default CarsFree;
