import React from 'react';
import styles from "./Header.module.scss";
import CarNumber from '../../pages/Driver/CarNumber/CarNumber';
import mainLogo from "../../assets/img/logo-franc.png";
import {logoutQuery} from '../../services/api';
import {routes} from '../../helpers/routes';
import {useNavigate} from 'react-router-dom';


const Header = ({isAuth = false}) => {

  const navigate = useNavigate();

 const onClickLogout = () => {

    return logoutQuery()
      .then(() => {
        localStorage.clear();
        navigate(routes.login);
      })
      .then(() => {})
      .catch((err) => console.log(err))
  }


  return (
    <header className={styles.header}>
      <img className={styles.logo} width={"112"} height={"33"} src={mainLogo} alt={'лого'}/>
      <div className={styles.btns}>
        {
          isAuth ?
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
