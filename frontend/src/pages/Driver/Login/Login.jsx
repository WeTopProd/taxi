import {useEffect, useState} from 'react';
import styles from "./Login.module.scss";
import {useDriverContext} from '../DriverContext';
import {getDriverInfoByToken, loginQuery} from '../../../services/api';
import {getToken, setToken} from '../../../services/localStorageService';


function Login({setIsLogin}) {

  const [inputPhone, setInputPhone] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const {
    setCarId,
    setCarNumber,
    setDriverName,
    setDriverPhone
  } = useDriverContext();


  const  onSuccessLogin = (res) => {
    const token = res?.data?.auth_token;
    setToken(token);
    setIsLogin(true);

    getDriverInfoByToken(token)
      .then(res => {
      setCarId(res.data.id);
      setDriverName(res.data.first_name);
      setDriverPhone(res.data.phone);
      setCarNumber(res.data.car_number);
    })
      .catch((err) => {alert('Не удалось получить данные водителя по токену', err)})
  }

  useEffect(() => {
    if (getToken()) {
      setIsLogin(true);
      getDriverInfoByToken();
    }
  }, [])


  const onSubmitLogin = (e) => {
    e.preventDefault()
    loginQuery(inputPhone,inputPassword)
      .then(res => {
        res.request.status === 200 ? onSuccessLogin(res) : setIsLogin(false)
      } )
      .catch(err => console.log(err))

  }

  return (

    <section className={styles.login_wrapper}>
      <h2>Вход в личный кабинет</h2>
      <form onSubmit={onSubmitLogin}>
        <input
          type='text'
          onChange={(e) => setInputPhone(e.target.value)}
          value={inputPhone}
          placeholder="Телефон"
        />
        <input
          type="password"
          value={inputPassword}
          onChange={event => setInputPassword(event.target.value)}
          placeholder="Пароль"
        />
        <button type={'submit'}>Войти</button>
      </form>
    </section>
  )
}

export default Login;
