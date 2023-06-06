import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  fetchNewOrders,
  fetchOrdersByDriver,
  QueryNewOrders,
} from '../../services/orderService';
import { useQuery } from '@tanstack/react-query';

const initialValue = {
  driverOrders: [],
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

  const { data: driverOrders = [] } = useQuery({
    queryFn: () => fetchOrdersByDriver(carId).then((res) => res.data.results),
    queryKey: [carId],
    refetchInterval: timeRefreshOrders,
    retry: 5,
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <Context.Provider
      value={{
        driverOrders,
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
