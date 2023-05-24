import styles from './Driver.module.scss';
import Header from './Header/Header';
import DriverStatus from './DriverStatus/DriverStatus';
import DriverPopup from './DriverPopup/DriverPopup';


const ORDER = {
  id: '3',
  address: 'Некрасова, 19'
}

function Driver() {

  const isOpenDriverPopUp = true;

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
