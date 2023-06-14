import React from 'react';
import styles from './MapLegend.module.scss';
import cx from 'classnames';
import { useBarmanContext } from '../../pages/Barman/BarmanContext';
import { BCF_INFO } from '../Map/BCF_INFO';

const zones = BCF_INFO.zonePrices;

const MapLegend = () => {
  const { setPrice } = useBarmanContext();

  return (
    <div className={styles.legend}>
      {zones.map((zone, index) => (
        <button
          onClick={() => setPrice(zone)}
          key={index}
          className={cx(styles.legend_item, styles[`legend_zone${index + 1}`])}>
          {zone}
        </button>
      ))}
    </div>
  );
};

export default MapLegend;
