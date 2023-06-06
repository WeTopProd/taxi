import styles from './Barmen.module.scss';
import Header from './Header/Header';
import Form from './Form/Form';
import Map from '../../components/Map/Map';
import React, { useEffect } from 'react';
import changeMeta from '../../helpers/changeMeta';
import { BarmenProvider } from './BarmenContext';
import OrdersList from './OrdersList/OrdersList';
import { useQuery } from '@tanstack/react-query';
import { fetchOrdersByPage } from '../../services/orderService';

const PAGE_TITLE = 'Бармен - "БКФ Такси"';
const PAGE_FAVICON = '/favicon_barmen.ico';

function Barmen() {
  useEffect(() => changeMeta(PAGE_TITLE, PAGE_FAVICON), []);

  const { data: orders = [] } = useQuery({
    queryFn: () => fetchOrdersByPage().then((res) => res.data?.results),
    queryKey: ['orders'],
    refetchInterval: 3000,
    retry: 5,
    onError: (error) => {
      alert('Не удалось загрузить список заказов');
    },
  });

  return (
    <div className={styles.container_barmen}>
      <BarmenProvider>
        <Header />
        <main className={styles.main}>
          <div className={styles.left}>
            <div className={styles.form}>
              <Form />
            </div>
            <div className={styles.orders_list}>
              {orders.length > 0 ? (
                <OrdersList orders={orders} />
              ) : (
                <span className={styles.no_orders}>Нет заказов</span>
              )}
            </div>
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
