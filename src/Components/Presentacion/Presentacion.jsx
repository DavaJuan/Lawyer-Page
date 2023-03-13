import React from 'react';
import Abogado from './img/presentacion.jpg';
import './Presentacion.css';

const Presentacion = () => {
  return (
    <div className='present-cont'>
      <div data-aos="fade-up" >
        <img src={Abogado} alt="" width={'500px'}/>
      </div >
      <div className='present-text-cont' data-aos="fade-up" >
        <h4>Fundador de Estudio Juridico</h4>
        <h2>Jose Felix</h2>
        <h4>MAT 12145/ Tº  IIV Fº 42 CAAL</h4>
        <hr />
        <p>
        Me recibí de Licenciado en Trabajo Social en el año 1997 – Universidad del Museo Social – UMSA y, con el ánimo de obtener una mirada más acabada e integral de los problemas que surgen en el seno de las familias, años después me recibí de Abogado en la misma casa.
        </p>
        <p>
        Posteriormente me especialicé en el Derecho de Familia, sobre todo en lo relacionado a la protección de niños, niñas y adolescentes y al acompañamiento interdisciplinario que las familias requieren al momento de enfrentar rupturas en sus vínculos más íntimos.
        </p>
        <p>
        En el proceso de familia es indispensable el trabajo en equipo. Es prioridad en nuestro estudio lograr acuerdos beneficiosos para ambas partes y, que además, el trayecto para lograrlo sea transitado de la forma menos dolorosa posible, sobre todo pensando en el bienestar de los niños y abuelos de la familia, que de una manera u otra, quedan involucrados en ese proceso.
        </p>
      </div>
    </div>
  );
}

export default Presentacion;