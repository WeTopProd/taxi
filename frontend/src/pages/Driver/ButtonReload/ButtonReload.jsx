import React from 'react';
import styles from './ButtonReload.module.scss';

const ButtonReload = () => {
  const onClickHandler = () => window.location.reload();

  return (
    <>
      <button onClick={onClickHandler} className={styles.btn}>
        <svg
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M21.91 4.09a1 1 0 0 0-1.07.16l-1.36 1.21A9.81 9.81 0 0 0 12 2a10 10 0 1 0 9.42 13.33 1 1 0 0 0-1.89-.66A8 8 0 1 1 12 4a7.86 7.86 0 0 1 6 2.78l-1.66 1.47a1 1 0 0 0-.27 1.11A1 1 0 0 0 17 10h4.5a1 1 0 0 0 1-1V5a1 1 0 0 0-.59-.91Z"
          />
        </svg>
      </button>
    </>
  );
};

export default ButtonReload;
