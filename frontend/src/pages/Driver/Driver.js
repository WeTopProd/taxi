import styles from './Driver.module.scss';
import Header from '../../components/Header/Header';
import DriverStatus from './DriverStatus/DriverStatus';
import DriverPopup from './DriverPopup/DriverPopup';
import { useEffect } from 'react';
import changeMeta from '../../helpers/changeMeta';
import { DriverProvider, useDriverContext } from './DriverContext';
import { getDriverInfoByToken } from '../../services/userService';

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
    newOrders,
    setCarId,
    setCarNumber,
    setDriverName,
    setDriverPhone,
    driverStatus,
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
        {driverStatus === 'свободен'
          ? newOrders.map((newOrder, index) => {
              return (
                <DriverPopup
                  key={index}
                  address={newOrder.address}
                  orderId={newOrder.id}
                />
              );
            })
          : ''}
      </main>
    </div>
  );
}

export default DriverContainer;
