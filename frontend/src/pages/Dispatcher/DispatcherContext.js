import React, { createContext, useContext } from 'react';
import {
  fetchNewOrders,
  fetchOrdersByPage,
  QueryNewOrders,
} from '../../services/orderService';
import { QueryCars } from '../../services/userService';
import { useQuery } from '@tanstack/react-query';

const initialValue = {
  newOrders: [],
  isLoading: true,
  carsList: [],
  isLoadingCars: true,
};

const Context = createContext(initialValue);

export const DispatcherProvider = ({ children }) => {
  const QueryOrdersByPage = (time) =>
    useQuery({
      queryFn: () => fetchOrdersByPage().then((res) => res.data?.results),
      queryKey: ['ordersDispatcher1'],
      refetchInterval: time,
      retry: 5,
      onError: (error) => {
        console.error(error);
      },
    });

  const { data: newOrders = [], isLoading: isLoadingOrders = true } =
    QueryOrdersByPage(3000);

  const { data: carsList = [], isLoading: isLoadingCars = true } =
    QueryCars(3000);

  return (
    <Context.Provider
      value={{ newOrders, isLoadingOrders, carsList, isLoadingCars }}>
      {children}
    </Context.Provider>
  );
};

export const useDispatcherContext = () => {
  const context = useContext(Context);

  if (!context) {
    throw Error('No Dispatcher context found.');
  }

  return context;
};
