import React, {useState} from 'react';
import styles from './Login.module.scss';
import {loginQuery} from '../../services/api';
import {setToken} from '../../services/localStorageService';
import {routes} from '../../services/routes';
import {useNavigate} from 'react-router-dom';
import Header from '../../components/Header/Header';


function Login() {

  const [inputPhone, setInputPhone] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const navigate = useNavigate();

  const  onSuccessLogin = (res) => {
    const token = res?.data?.auth_token;
    setToken(token);
    navigate(routes.driver)
  }

  const onSubmitLogin = (e) => {
    e.preventDefault()
    loginQuery(inputPhone,inputPassword)
      .then(res => {
        res.request.status === 200 ? onSuccessLogin(res) : alert('неверные данные')
      } )
      .catch(err => {
        alert('Данные введены с ошибкой');
        console.log(err);
      })
  }

  return (
    <div className={styles.container}>
      <Header isAuth={false}/>
      <section className={styles.login_wrapper}>
        <h2>Вход в личный кабинет</h2>
        <form onSubmit={onSubmitLogin}>
          <input
            type='text'
            onChange={(e) => setInputPhone(e.target.value)}
            value={inputPhone}
            placeholder="Телефон"
            name="driver_phone_login"
            id="driver_phone_login"
            required={true}
          />
          <input
            type="password"
            value={inputPassword}
            onChange={event => setInputPassword(event.target.value)}
            placeholder="Пароль"
            name="driver_password_login"
            id="driver_password_login"
            required={true}
          />
          <button type={'submit'}>Войти</button>
        </form>
      </section>
    </div>
  )
}

export default Login;
