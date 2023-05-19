import React, {useState} from 'react';
import styles from "./DriverStatus.module.scss";
import cx from "classnames"


const DriverStatus = () => {
  const [driverStatus, setDriverStatus] = useState('свободен');

  return (
    <div>
      <p className={cx(styles.status_text, driverStatus === 'занят' ? styles.status_text_busy : '')}>
        Текущий статус: {driverStatus}
      </p>
      <div>
        <p className={styles.change_status_text}>Изменить статус</p>
        <div className={styles.change_status_btns}>
          <button
            className={styles.change_status_btn}
            onClick={() => setDriverStatus('свободен')}
            disabled={driverStatus === 'свободен'}
          >
            Я свободен
          </button>
          <button
            className={cx(styles.change_status_btn, styles.change_status_btn_busy)}
            onClick={() => setDriverStatus('занят')}
            disabled={driverStatus === 'занят'}
          >
            Я занят
          </button>
        </div>
      </div>
    </div>
  )
};

export default DriverStatus;

