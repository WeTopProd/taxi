import React, { useState } from 'react';
import styles from './Form.module.scss';
import cx from 'classnames';
import { useBarmenContext } from '../BarmenContext';
import { submitOrder } from '../../../services/orderService';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { address, setAddress } = useBarmenContext();

  const clearForm = () => {
    setName('');
    setPhone('');
    setAddress('');
  };

  const sendRequest = (data) => {
    submitOrder(data)
      .then(function (response) {
        alert('Заказ отправлен');
        clearForm();
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest({
      name: name,
      phone: phone,
      address: address,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={'Имя'}
        name="name"
        id="name"
        required={true}
      />
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder={'Телефон'}
        name="phone"
        id="phone"
        required={true}
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder={'Адрес'}
        name="address"
        id="address"
        required={true}
      />
      <div className={styles.form__btns}>
        <button className={styles.btn} type={'submit'}>
          Отправить запрос
        </button>
        <button
          className={cx(styles.btn, styles.btn_reset)}
          type={'reset'}
          onClick={clearForm}>
          Очистить
        </button>
      </div>
    </form>
  );
};

export default Form;
