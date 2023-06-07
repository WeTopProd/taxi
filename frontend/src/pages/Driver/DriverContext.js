import React, { createContext, useContext, useState } from 'react';
import { fetchOrdersByDriver } from '../../services/orderService';
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

  const { data: driverOrders = [] } = useQuery({
    queryFn: () => fetchOrdersByDriver(carId).then((res) => res.data.results),
    queryKey: [carId],
    refetchInterval: 3000,
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
