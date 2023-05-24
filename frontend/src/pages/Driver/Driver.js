import styles from './Driver.module.scss';
import Header from './Header/Header';
import DriverStatus from './DriverStatus/DriverStatus';
import DriverPopup from './DriverPopup/DriverPopup';
import {useEffect} from 'react';
import changeMeta from '../../services/changeMeta';


const ORDER = {
  id: '3',
  address: 'Некрасова, 19'
}

const PAGE_TITLE = 'Водитель - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_driver.ico';

function Driver() {

  const isOpenDriverPopUp = true;
  useEffect(() => changeMeta(PAGE_TITLE, PAGE_FAVICON), []);

  return (
    <div className={styles.container}>
      <Header />
      <main>
        <DriverStatus />
        {isOpenDriverPopUp && <DriverPopup address={ORDER.address} orderId={ORDER.id}/>}
      </main>
    </div>
  );
}

export default Driver;
