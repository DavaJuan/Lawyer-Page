import React from 'react';
import Cards from './Cards/Cards';
import './Servicios.css';

const Servicos = () => {
  return (
    <div className='servicios-cont'>
      <div data-aos="fade-up" >
        <h3>Servicios</h3>
        <Cards />
      </div>
    </div>
  );
}

export default Servicos;