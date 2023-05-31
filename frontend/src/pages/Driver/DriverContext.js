import React, {createContext, useContext, useState} from 'react';
import {useQueryCars} from '../../services/api';
import {QueryNewOrders} from '../../services/orderService';
import {QueryCars} from '../../services/userService';


const initialValue = {
  newOrders: [],
  isLoading: true,
  carsList: [],
  isLoadingCars: true
}

const Context = createContext(initialValue)

export const DriverProvider = ({ children }) => {

  const [carId, setCarId] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [driverName, setDriverName] = useState('');
  const [driverPhone, setDriverPhone] = useState('');

  const {data: newOrders = [], isLoading: isLoadingOrders = true} = QueryNewOrders(3000);


  // const {data: carsList = [], isLoading: isLoadingCars = true} = QueryCars(3000);

  return (
    <Context.Provider value={
      {
        newOrders,
        isLoadingOrders,
        carId,
        setCarId,
        carNumber,
        setCarNumber,
        driverName,
        setDriverName,
        driverPhone,
        setDriverPhone
      }
    }>{children}</Context.Provider>
  )
}

export const useDriverContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw Error('No Driver context found.')
  }

  return context
}
