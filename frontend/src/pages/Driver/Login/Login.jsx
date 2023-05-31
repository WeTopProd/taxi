import {useEffect, useState} from 'react';
import axios from 'axios'
import styles from "./Login.module.scss";


function Login({setIsLogin}) {

  const [inputPhone, setInputPhone] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const onSuccessLogin = (res) => {
    const authKey = res?.data?.auth_token;
    setIsLogin(true);


    axios.get(`http://127.0.0.1:8000/api/users/me/`,
      {
        headers : {
          'Content-Type': 'application/json',
          'authorization': `Token ${authKey}`
        }
      }
    )
      .then(res => {
        localStorage.setItem('token', authKey);
        localStorage.setItem('car_id', res.data.id);
        localStorage.setItem('driver_name', res.data.first_name);
        localStorage.setItem('driver_phone', res.data.phone);
        localStorage.setItem('car_number', res.data.car_number);
      } )

  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLogin(true);
    }
  }, [])


  const Login = (e) => {
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
      <form onSubmit={Login}>
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
        <button onClick={Login} type={'submit'}>Войти</button>
      </form>
    </section>
  )
}

export default Login;
