import React, {useState} from 'react';
import styles from "./DriverStatus.module.scss";
import cx from "classnames"
import {useDriverContext} from '../DriverContext';
import {changeDriverDataQuery} from '../../../services/api';
import {getToken} from '../../../services/localStorageService';


const DriverStatus = () => {
  const [driverStatus, setDriverStatus] = useState('занят');
  const token = getToken();

  const {carId} = useDriverContext();

  const onClickStatusFree = () => {
    setDriverStatus('свободен');
    changeDriverDataQuery(token, {status: 'free'}, carId)
      .catch((err) => {alert(`не удалось изменить статус ${err}`)})
  }

  const onClickStatusBusy = () => {
    setDriverStatus('занят');
    changeDriverDataQuery(token, {status: 'busy'}, carId)
      .catch((err) => {alert(`не удалось изменить статус ${err}`)})
  }


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
            onClick={onClickStatusFree}
            disabled={driverStatus === 'свободен'}
          >
            Я свободен
          </button>
          <button
            className={cx(styles.change_status_btn, styles.change_status_btn_busy)}
            onClick={onClickStatusBusy}
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

