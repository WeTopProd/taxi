import React from 'react';
import styles from "./Header.module.scss";
import CarNumber from '../CarNumber/CarNumber';
import mainLogo from "../../../assets/img/logo-franc.png";


const Header = ({isLogin, setIsLogin}) => {

 const onClickLogout = () => {
    const token = localStorage.getItem('token')

    return fetch(
      'http://localhost:8000/api/auth/token/logout/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Token ${token}`
        }
      }
    ).then(() => setIsLogin(false))
      .then(() => {localStorage.removeItem('token')})
      .catch((err) => console.log(err))
  }


  return (
    <header className={styles.header}>
      <img className={styles.logo} width={"112"} height={"33"} src={mainLogo} alt={'лого'}/>
      <div className={styles.btns}>
        {
          isLogin ?
            <>
              <CarNumber />
              <button onClick={onClickLogout} className={styles.btn_logout}>Выйти</button>
            </> : ''
        }
      </div>
    </header>
  )
};

export default Header;
