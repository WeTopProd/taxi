import React, {useState} from 'react';
import styles from "./DriverStatus.module.scss";
import cx from "classnames"
import axios from 'axios';



const DriverStatus = () => {
  const [driverStatus, setDriverStatus] = useState('занят');




  const onClickStatusFree = () => {
    setDriverStatus('свободен');
    axios.patch(`http://127.0.0.1:8000/api/users/4/`,
      {
      status: 'free'
    },
      {
        headers : {
          'Content-Type': 'application/json',
          'authorization': `Token ${localStorage.getItem('token')}`
        }
      }
    )
  }

  const onClickStatusBusy = () => {
    setDriverStatus('занят');
    axios.patch(`http://127.0.0.1:8000/api/users/4/`,
      {
      status: 'busy'
    },
      {
        headers : {
          'Content-Type': 'application/json',
          'authorization': `Token ${localStorage.getItem('token')}`
        }
      }
    )
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

