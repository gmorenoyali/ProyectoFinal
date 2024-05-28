import React from 'react';
/* import './Navbar.css'; */
import '../styles/Navbar.css'

import logo from '../assets/pascual1.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="#" className="navbar-link">Inicio</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Servicios</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Nosotros</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


