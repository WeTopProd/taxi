import React from 'react';
import styles from './MapLegend.module.scss';
import cx from 'classnames';
import { useBarmenContext } from '../../pages/Barmen/BarmenContext';

const MapLegend = () => {
  const { setPrice } = useBarmenContext();

  return (
    <div className={styles.legend}>
      <button
        onClick={() => setPrice(250)}
        className={cx(styles.legend_item, styles.legend_item_250)}>
        250р
      </button>
      <button
        onClick={() => setPrice(350)}
        className={cx(styles.legend_item, styles.legend_item_350)}>
        350р
      </button>
      <button
        onClick={() => setPrice(500)}
        className={cx(styles.legend_item, styles.legend_item_500)}>
        500р
      </button>
      <button
        onClick={() => setPrice(750)}
        className={cx(styles.legend_item, styles.legend_item_750)}>
        750р
      </button>
      <button
        onClick={() => setPrice(1000)}
        className={cx(styles.legend_item, styles.legend_item_1000)}>
        1000р
      </button>
    </div>
  );
};

export default MapLegend;
