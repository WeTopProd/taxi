import React, {useEffect, useRef, useState} from 'react';
import styles from "./AddCar.module.scss";
import cx from 'classnames';
import {useOnClickOutside} from '../../../services/hooks';

const AddCar = () => {
  const [isOpenAddCar, setIsOpenAddCar] = useState(false);
  const addCarRef = useRef(null);
  const btnRef = useRef(null);

  const onClickAddCarHandler = () => {
    setIsOpenAddCar(!isOpenAddCar);
  };

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(addCarRef, btnRef, () => setIsOpenAddCar(false));

  return (
    <>
      <button
        ref={btnRef}
        className={cx(styles.btn, isOpenAddCar ? styles.active : '')}
        onClick={onClickAddCarHandler}
      >
        Добавить автомобиль
      </button>
      {
        isOpenAddCar && (
          <div ref={addCarRef} className={styles.add_car_popup}>
            <form action="src/components/Dispatcher/AddCar/AddCar">
              <input type="text" placeholder={'Номер машины'}/>
              <input type="text" placeholder={'Имя водителя'}/>
              <input type="text" placeholder={'Телефон водителя'}/>
              <div className={styles.btns}>
                <button className={styles.btn} type={'submit'}>Отправить</button>
                <button className={cx(styles.btn, styles.btn_reset)} type={'reset'}>Очистить</button>
              </div>

            </form>
          </div>
        )
      }
    </>
  )
};


export default AddCar;
