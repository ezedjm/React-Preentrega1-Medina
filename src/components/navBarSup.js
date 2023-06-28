import React from 'react';
import logoImage from '../images/juanifavicon1bis.png';

const navBarSup = ({ handleCartClick }) => {
  return (
    <div className="navbar">
      <div className="logo">JUANIT<img className="fotoJuanito" src={logoImage} alt="foto de Juanito" /></div>
      <nav>
        <ul className="navList">
          <li className="navItem">Inicio</li>
          <li className="navItem">Nosotros</li>
          <li className="navItem">Testimonios</li>
          <li className="navItem" onClick={handleCartClick}>Carrito 
          <span> </span>
            <span className="carritoCont">9</span>
          </li>
          <li className="navItem">Contacto</li>
        </ul>
      </nav>
    </div>
  );
};

export default navBarSup;
