import {useEffect, useState} from 'react';
import axios from 'axios'
import styles from "./Login.module.scss";
import {useDriverContext} from '../DriverContext';


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
    localStorage.setItem('token', token);
    setIsLogin(true);

    axios.get(`http://127.0.0.1:8000/api/users/me/`,
      {
        headers : {
          'Content-Type': 'application/json',
          'authorization': `Token ${token}`
        }
      }
    )
      .then(res => {
        setCarId(res.data.id);
        setDriverName(res.data.first_name);
        setDriverPhone(res.data.phone);
        setCarNumber(res.data.car_number);
      })
      .catch((err) => {alert('Не удалось получить данные водителя по токену', err)})
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    }
  }, [])


  const onSubmitLogin = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/auth/token/login/`,
      {
        phone: inputPhone,
        password: inputPassword
      },
      {
        headers : {
          'Content-Type': 'application/json',
        }
      }
    )
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
