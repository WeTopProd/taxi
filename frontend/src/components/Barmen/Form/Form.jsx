import React from 'react';
import styles from "./Form.module.scss";
import cx from 'classnames';


const Form = () => {

  return (
    <form className={styles.form}>
      <input type="text" placeholder={"Имя"} />
      <input type="tel" placeholder={"Телефон"} />
      <input type="text" id="input1" placeholder={"Адрес"} readOnly={true}/>
      <div className={styles.form__btns}>
        <button className={styles.btn} type="submit">Отправить запрос</button>
        <button className={cx(styles.btn, styles.btn_reset)} type="reset">Очистить</button>
      </div>
    </form>
  )
};


export default Form;
