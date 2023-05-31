import React from 'react';
import { Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import './App.scss';

import Dispatcher from './pages/Dispatcher/Dispatcher';
import Barmen from './pages/Barmen/Barmen';
import Driver from './pages/Driver/Driver';
import Main from './pages/Main/Main';
import {routes} from './services/routes';
import Login from './pages/Login/Login';


const queryClient = new QueryClient();


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/"  element={<Main />}/>
        <Route path={routes.login}  element={<Login />}/>
        <Route path="dispatcher" element={<Dispatcher />}/>
        <Route path="barmen" element={<Barmen />}/>
        <Route path={routes.driver} element={<Driver />}/>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
