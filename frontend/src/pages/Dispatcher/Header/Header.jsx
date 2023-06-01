import React from 'react';
import styles from './Header.module.scss';
import Notice from '../Notice/Notice';
import mainLogo from '../../../assets/img/logo-franc.png';
import AddCar from '../AddCar/AddCar';
import Orders from '../Orders/Orders';

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src={mainLogo} />
      <div className={styles.btns}>
        <AddCar />
        <Orders />
        <Notice />
      </div>
    </header>
  );
};

export default Header;
