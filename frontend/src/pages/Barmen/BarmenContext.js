import React, { createContext, useContext, useState } from 'react';
import { QueryCars } from '../../services/userService';

const initialValue = {
  address: '',
  setAddress: () => undefined,
  carsFreeCount: 0,
};

const Context = createContext(initialValue);

export const BarmenProvider = ({ children }) => {
  const [address, setAddress] = useState(initialValue.address);

  const { data: carsFreeList = [] } = QueryCars(3000);

  return (
    <Context.Provider value={{ address, setAddress, carsFreeList }}>
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
