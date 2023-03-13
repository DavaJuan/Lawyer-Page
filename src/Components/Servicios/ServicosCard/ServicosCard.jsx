import React from 'react';
import './ServiciosCard.css';

const ServicosCard = ({img,title}) => {
  return (
    <div className='card-container'>
      <div className='img-container'>
        <img src={img} alt="abogado" />
      </div>
      <div className='card-title'>
        <p>{title}</p>
      </div>
      <div className='card-button'>
        <button>Más Info</button>
      </div>
    </div>
  );
}

export default ServicosCard;