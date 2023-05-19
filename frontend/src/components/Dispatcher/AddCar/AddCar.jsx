import React, {useEffect, useRef, useState} from 'react';
import styles from "./AddCar.module.scss";
import cx from 'classnames';

const AddCar = () => {
  const [isOpenAddCar, setIsOpenAddCar] = useState(false);
  const addCarRef = useRef(null);
  const btnRef = useRef(null);

  const onClickAddCarHandler = () => {
    setIsOpenAddCar(!isOpenAddCar);
  }

// Hook
function useOnClickOutside(refPopup, refBtn, handler) {
  useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!refPopup.current || refPopup.current.contains(event.target) || event.target === refBtn.current) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    [refPopup, refBtn, handler]);
}

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
