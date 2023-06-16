import React from 'react';
import styles from './Header.module.scss';
import mainLogo from '../../../assets/img/logo-franc.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        width={'112'}
        height={'33'}
        src={mainLogo}
        alt={'лого'}
      />
    </header>
  );
};

export default Header;
