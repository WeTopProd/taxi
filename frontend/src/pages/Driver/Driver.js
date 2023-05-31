import styles from './Driver.module.scss';
import Header from '../../components/Header/Header';
import DriverStatus from './DriverStatus/DriverStatus';
import DriverPopup from './DriverPopup/DriverPopup';
import {useEffect, useState} from 'react';
import changeMeta from '../../helpers/changeMeta';
import {DriverProvider, useDriverContext} from './DriverContext';
import {routes} from '../../helpers/routes';
import {getDriverInfoByToken} from '../../services/userService';

const ORDER = {
  id: '3',
  address: 'Некрасова, 19'
}

const PAGE_TITLE = 'Водитель - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_driver.ico';

function DriverContainer() {
  return (
    <DriverProvider>
      <Driver />
    </DriverProvider>
  )
}

function Driver() {
  const {setCarId, setCarNumber, setDriverName, setDriverPhone} = useDriverContext();

  useEffect(() => {
    changeMeta(PAGE_TITLE, PAGE_FAVICON);

    getDriverInfoByToken()
      .then((res) => {
        setCarId(res.data.id);
        setCarNumber(res.data.car_number);
        setDriverName(res.data.first_name);
        setDriverPhone(res.data.phone);
      })
      .catch((err) => {
        alert('Ошибка получения данных');
        console.log(err);
      })
  },[]);

  return (
    <div className={styles.container}>
      <Header isAuth={true}/>
      <main>
        <DriverStatus />
        <DriverPopup address={ORDER.address} orderId={ORDER.id}/>
      </main>
    </div>
  );
}

export default DriverContainer;
