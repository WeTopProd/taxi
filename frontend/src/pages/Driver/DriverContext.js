import React, {createContext, useContext, useState} from 'react';
import {QueryCars, QueryNewOrders, useQueryCars} from '../../services/api';


const initialValue = {
  newOrders: [],
  isLoading: true,
  carsList: [],
  isLoadingCars: true
}

const Context = createContext(initialValue)

export const DriverProvider = ({ children }) => {

  const {data: newOrders = [], isLoading: isLoadingOrders = true} = QueryNewOrders(3000);

  const [userToken, setUserToken] = useState('');



  // const {data: carsList = [], isLoading: isLoadingCars = true} = QueryCars(3000);

  return (
    <Context.Provider value={{ newOrders, isLoadingOrders, userToken, setUserToken}}>{children}</Context.Provider>
  )
}

export const useDriverContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw Error('No Driver context found.')
  }

  return context
}
