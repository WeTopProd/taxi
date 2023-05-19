import React, {useState} from 'react';
import styles from "./DriverPopup.module.scss";
import cx from "classnames"


const DriverPopup = ({address, orderId}) => {
  const [isReject, setIsReject] = useState(false);

  return (
    <>
      <div className={styles.driver_popup}>
        <h3>Заказ N{orderId}</h3>
        <p>Адрес: {address}</p>
      {!isReject ?
          (<div className={styles.btns}>
            <button className={styles.btn}>Принять</button>
            <button className={cx(styles.btn, styles.btn_reject)} onClick={() => setIsReject(true)}>Отклонить</button>
          </div>) :
          (<form className={styles.reject}>
            <textarea rows={5} placeholder={"Введите причину отказа"}></textarea>
            <button type={'submit'}>Отправить</button>
          </form>)
      }
      </div>
    </>
  )
};

export default DriverPopup;
