import React from 'react';
import { Routes, Route } from "react-router-dom";

import './scss/App.scss';

import Dispatcher from './pages/Dispatcher';
import Barmen from './pages/Barmen';
import Driver from './pages/Driver';

function App() {
  return (
    <Routes>
      <Route path="dispatcher" element={<Dispatcher />}/>
      <Route path="barmen" element={<Barmen />}/>
      <Route path="driver" element={<Driver />}/>
    </Routes>
  );
}

export default App;
