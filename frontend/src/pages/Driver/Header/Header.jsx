import React from 'react';
import styles from "./Header.module.scss";
import CarNumber from '../CarNumber/CarNumber';
import mainLogo from "../../../assets/img/logo-franc.png";
import {logoutQuery} from '../../../services/api';
import {getToken} from '../../../services/localStorageService';


const Header = ({isLogin, setIsLogin}) => {

 const onClickLogout = () => {
    const token = getToken('token')

    return logoutQuery(token)
      .then(() => {localStorage.clear()})
      .then(() => {setIsLogin(false)})
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
