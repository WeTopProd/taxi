import React, { createContext, useContext, useState } from 'react'
import {QueryNewOrders} from '../../services/api';


const initialValue = {
  newOrders: '',
  isLoading: true
}

const Context = createContext(initialValue)

export const DispatcherProvider = ({ children }) => {

  const {data: newOrders = [], isLoading} = QueryNewOrders ();

  return (
    <Context.Provider value={{ newOrders, isLoading }}>{children}</Context.Provider>
  )
}

export const useDispatcherContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw Error('No Dispatcher context found.')
  }

  return context
}
