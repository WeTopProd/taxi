import React, { createContext, useContext } from 'react'
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

export const DispatcherProvider = ({ children }) => {

  const {data: newOrders = [], isLoading: isLoadingOrders = true} = QueryNewOrders (3000);

  const {data: carsList = [], isLoading: isLoadingCars = true} = QueryCars(3000);

  return (
    <Context.Provider value={{ newOrders, isLoadingOrders, carsList, isLoadingCars }}>{children}</Context.Provider>
  )
}

export const useDispatcherContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw Error('No Dispatcher context found.')
  }

  return context
}
