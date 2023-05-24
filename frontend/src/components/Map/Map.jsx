import React from 'react';
import styles from "./Map.module.scss";
import {useYandexMap} from './useYandexMap';
import cx from 'classnames';

const Map = () => {
  useYandexMap();

  return (
    <div className={styles.container}>
      <div id="map" className={styles.map}></div>
      <ul className={styles.legend}>
        <li className={cx(styles.legend_item, styles.legend_item_250)}>250р</li>
        <li className={cx(styles.legend_item, styles.legend_item_350)}>350р</li>
        <li className={cx(styles.legend_item, styles.legend_item_500)}>500р</li>
        <li className={cx(styles.legend_item, styles.legend_item_750)}>750р</li>
        <li className={cx(styles.legend_item, styles.legend_item_1000)}>1000р</li>
      </ul>
    </div>
  )
};

export default Map;
