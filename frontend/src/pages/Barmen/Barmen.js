import styles from './Barmen.module.scss';
import Header from './Header/Header';
import Form from './Form/Form';
import Map from '../../components/Map/Map';


function Barmen() {
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
