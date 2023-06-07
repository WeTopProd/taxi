import styles from './Driver.module.scss';
import Header from '../../components/Header/Header';
import DriverStatus from './DriverStatus/DriverStatus';
import DriverPopup from './DriverPopup/DriverPopup';
import { useEffect, useState } from 'react';
import changeMeta from '../../helpers/changeMeta';
import { DriverProvider, useDriverContext } from './DriverContext';
import { getDriverInfoByToken } from '../../services/userService';
import { useQuery } from '@tanstack/react-query';
import { fetchOrdersByDriver } from '../../services/orderService';

const PAGE_TITLE = 'Водитель - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_driver.ico';

function DriverContainer() {
  return (
    <DriverProvider>
      <Driver />
    </DriverProvider>
  );
}

function Driver() {
  const {
    driverOrders,
    carId,
    setCarId,
    setCarNumber,
    setDriverName,
    setDriverPhone,
    setDriverStatus,
  } = useDriverContext();

  useEffect(() => {
    changeMeta(PAGE_TITLE, PAGE_FAVICON);

    getDriverInfoByToken()
      .then((res) => {
        setCarId(res.data.id);
        setCarNumber(res.data.car_number);
        setDriverName(res.data.first_name);
        setDriverPhone(res.data.phone);
        setDriverStatus(res.data.status);
      })
      .catch((err) => {
        alert('Ошибка получения данных');
        console.log(err);
      });
  });

  return (
    <div className={styles.container}>
      <Header isAuth={true} />
      <main>
        <DriverStatus />
        {driverOrders.length
          ? driverOrders.map((order, index) => {
              return (
                <DriverPopup
                  key={index}
                  address={order.address}
                  orderId={order.id}
                  orderStatus={order.status}
                />
              );
            })
          : ''}
      </main>
    </div>
  );
}

export default DriverContainer;
