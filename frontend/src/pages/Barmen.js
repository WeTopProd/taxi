import styles from './Barmen.module.scss';
import Header from '../components/Barmen/Header/Header';
import Form from '../components/Barmen/Form/Form';
import Map from '../components/Barmen/Map/Map';

function Barmen() {
  return (
    <div className={styles.container_barmen}>
      <Header />
      <main className={styles.main}>
        <Form />
        <Map />
      </main>
    </div>
  );
}

export default Barmen;
