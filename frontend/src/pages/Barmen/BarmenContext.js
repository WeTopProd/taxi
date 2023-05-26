import React, { createContext, useContext, useState } from 'react'


const initialValue = {
  address: '',
  setAddress: () => undefined
}

const Context = createContext(initialValue)

export const BarmenProvider = ({ children }) => {
  const [address, setAddress] = useState(initialValue.address)

  return (
    <Context.Provider value={{ address, setAddress }}>{children}</Context.Provider>
  )
}

export const useBarmenContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw Error('No Barmen context found.')
  }

  return context
}
