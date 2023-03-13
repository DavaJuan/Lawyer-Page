import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Presentacion from './Components/Presentacion/Presentacion';
import Servicos from './Components/Servicios/Servicios';


const App = () => {
  return (
    <div>
      <Home />
      <Presentacion />
      <Servicos />
    </div>
  );
}

export default App;