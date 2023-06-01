import React, { createContext, useContext, useState } from 'react'
import {QueryCars} from '../../services/userService';
import {countByField} from '../../helpers/countObjects';


const initialValue = {
  address: '',
  setAddress: () => undefined,
  carsFreeCount: 0
}

const Context = createContext(initialValue)

export const BarmenProvider = ({ children }) => {
  const [address, setAddress] = useState(initialValue.address);

  let {data} = QueryCars(3000);

  const carsFreeCount = countByField(data, 'status', 'free');

  console.log(carsFreeCount);

  return (
    <Context.Provider value={{ address, setAddress, carsFreeCount }}>{children}</Context.Provider>
  )
}

export const useBarmenContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw Error('No Barmen context found.')
  }

  return context
}
