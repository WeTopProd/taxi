import styles from './Barmen.module.scss';
import Header from './Header/Header';
import Form from './Form/Form';
import Map from '../../components/Map/Map';
import {useEffect} from 'react';
import changeMeta from '../../services/changeMeta';
import {BarmenProvider} from './BarmenContext';
import {useQuery} from '@tanstack/react-query';
import {fetchOrders} from '../../services/api';


const PAGE_TITLE = 'Бармен - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_barmen.ico';

function Barmen() {

  useEffect(() => changeMeta(PAGE_TITLE, PAGE_FAVICON), []);

  const {data: orders = [], isLoading} = useQuery({
    queryFn: () => fetchOrders()
      .then((data) => {
        console.log('запрос из бармена');
        return data?.data.results
      }),
    queryKey: ["orders"],
    refetchInterval: 1000,
    retry: 5,
    onError: (error) => {alert(error)}
  });

  return (
    <div className={styles.container_barmen}>
      <BarmenProvider>
        <Header />
        <main className={styles.main}>
          <div className={styles.form}>
            <Form />
          </div>
          <div className={styles.map}>
            <Map />
          </div>
        </main>
      </BarmenProvider>
    </div>
  );
}

export default Barmen;
