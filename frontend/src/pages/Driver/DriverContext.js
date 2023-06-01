import React, { createContext, useContext, useState } from 'react';
import { QueryNewOrders } from '../../services/orderService';

const initialValue = {
  newOrders: [],
  isLoading: true,
  carsList: [],
  isLoadingCars: true,
};

const Context = createContext(initialValue);

export const DriverProvider = ({ children }) => {
  const [carId, setCarId] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [driverPhone, setDriverPhone] = useState('');
  const [driverStatus, setDriverStatus] = useState('занят');

  const timeRefreshOrders = driverStatus === 'свободен' ? 1000 : 0;

  const { data: newOrders = [], isLoading: isLoadingOrders = true } =
    QueryNewOrders(timeRefreshOrders);

  return (
    <Context.Provider
      value={{
        newOrders,
        isLoadingOrders,
        carId,
        setCarId,
        carNumber,
        setCarNumber,
        driverName,
        setDriverName,
        driverPhone,
        setDriverPhone,
        driverStatus,
        setDriverStatus,
      }}>
      {children}
    </Context.Provider>
  );
};

export const useDriverContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw Error('No Driver context found.');
  }

  return context;
};
