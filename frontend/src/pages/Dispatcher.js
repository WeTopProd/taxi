import styles from './Dispatcher.module.scss';
import Header from '../components/Dispatcher/Header/Header';
import Car from '../components/Dispatcher/Car/Car';
import Map from '../components/Dispatcher/Map/Map';

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
]

function Dispatcher() {
  return (
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
        <Map />
      </main>
    </div>
  );
}

export default Dispatcher;
