import styles from './Driver.module.scss';
import Header from './Header/Header';
import DriverStatus from './DriverStatus/DriverStatus';
import DriverPopup from './DriverPopup/DriverPopup';
import {useEffect, useState} from 'react';
import changeMeta from '../../services/changeMeta';
import {DriverProvider} from './DriverContext';
import Login from './Login/Login';


const ORDER = {
  id: '3',
  address: 'Некрасова, 19'
}

const PAGE_TITLE = 'Водитель - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_driver.ico';

function Driver() {

  useEffect(() => changeMeta(PAGE_TITLE, PAGE_FAVICON), []);

  const [isLogin, setIsLogin] = useState(false);

  return (
    <DriverProvider>
      <div className={styles.container}>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <main>
          {
            isLogin ?
              <>
                <DriverStatus />
                <DriverPopup address={ORDER.address} orderId={ORDER.id}/>
              </> :
              <Login isLogin={isLogin} setIsLogin={setIsLogin} />
          }
        </main>
      </div>
    </DriverProvider>

  );
}

export default Driver;
