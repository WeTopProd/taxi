import styles from './Barmen.module.scss';
import Header from './Header/Header';
import Form from './Form/Form';
import Map from '../../components/Map/Map';
import {useEffect} from 'react';
import changeMeta from '../../services/changeMeta';


const PAGE_TITLE = 'Бармен - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_barmen.ico';

function Barmen() {

  useEffect(() => changeMeta(PAGE_TITLE, PAGE_FAVICON), []);

  return (
    <div className={styles.container_barmen}>
      <Header />
      <main className={styles.main}>
        <div className={styles.form}>
          <Form />
        </div>
        <div className={styles.map}>
          <Map />
        </div>
      </main>
    </div>
  );
}

export default Barmen;