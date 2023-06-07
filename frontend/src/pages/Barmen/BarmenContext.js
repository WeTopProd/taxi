import React, { createContext, useContext, useState } from 'react';
import { QueryCars } from '../../services/userService';
import { fetchNewOrders, QueryNewOrders } from '../../services/orderService';
import { useQuery } from '@tanstack/react-query';

const initialValue = {
  address: '',
  setAddress: () => undefined,
  price: '',
  setPrice: () => undefined,
  carsFreeCount: 0,
};

const Context = createContext(initialValue);

export const BarmenProvider = ({ children }) => {
  const [address, setAddress] = useState(initialValue.address);
  const [price, setPrice] = useState('');

  const { data: carsFreeList = [] } = QueryCars(3000);

  return (
    <Context.Provider
      value={{ address, setAddress, price, setPrice, carsFreeList }}>
      {children}
    </Context.Provider>
  );
};

export const useBarmenContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw Error('No Barmen context found.');
  }

  return context;
};
