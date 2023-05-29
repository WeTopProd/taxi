import styles from './Dispatcher.module.scss';
import Header from './Header/Header';
import Car from './Car/Car';
import Map from '../../components/Map/Map';
import {useEffect} from 'react';
import changeMeta from '../../services/changeMeta';
import OrdersNew from './OrdersNew/OrdersNew';
import {DispatcherProvider, useDispatcherContext} from './DispatcherContext';

const CARS = [
  {
    number: 'e461yk799',
    status: 'занят'
  },
  {
    number: 'e423yk799',
    status: 'занят'
  },
  {
    number: 'e347yk799',
    status: 'свободен'
  },
  {
    number: 'p769yt199',
    status: 'занят'
  },
  {
    number: 'c051ak777',
    status: 'занят'
  },
  {
    number: 'x111xx777',
    status: 'свободен'
  },
];

const PAGE_TITLE = 'Диспетчер - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_dispatcher.ico';

function Dispatcher() {

  useEffect(() => changeMeta(PAGE_TITLE, PAGE_FAVICON), []);


  return (
    <DispatcherProvider>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.cars}>
            {
              CARS.map((car, index) => {
                return <Car key={index} number={car.number} status={car.status} />
              })
            }
          </div>
          <OrdersNew />
        </main>
      </div>
    </DispatcherProvider>

  );
}

export default Dispatcher;
