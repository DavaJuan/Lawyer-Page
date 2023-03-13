import React from 'react'
import Justicia from '../img/lawyer-svgrepo-com (1).svg';
import ServicosCard from '../ServicosCard/ServicosCard'
import './Cards.css';

const Cards = () => {
  return (
    <div className='cards-container'>
      <ServicosCard 
        img={Justicia}
        title='Familia'
      />
      <ServicosCard 
        img={Justicia}
        title='Adopciones'
      />
      <ServicosCard 
        img={Justicia}
        title='Sucesiones'
      />
      <ServicosCard 
        img={Justicia}
        title='Violencia'
      />
      <ServicosCard 
        img={Justicia}
        title='Salud Mental'
      />
      <ServicosCard 
        img={Justicia}
        title='Mentorías para abogados'
      />
      <ServicosCard 
        img={Justicia}
        title='Taller de Estudio'
      />
    </div>
  )
}

export default Cards