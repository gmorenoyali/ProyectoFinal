import React from 'react';
/* import './Navbar.css'; */
import '../styles/Navbar.css'

import logo from '../assets/pascual1.png';

const Navbar = () => {
  return (
    <nav className="navbar" id="Navbar">
      <div className="navbar-logo-container">
        <a href="#"><img src={logo} alt="Logo" className="navbar-logo" /></a>
        <p>Sabor Divino Catering</p>
      </div>
      <ul className="navbar-menu">
        <li className="navbar-item"><a href="/" className="navbar-link">Inicio</a></li>
        <li className="navbar-item"><a href="#Services" className="navbar-link">Servicios</a></li>
        <li className="navbar-item"><a href="#Story" className="navbar-link">Nosotros</a></li>
        <li className="navbar-item"><a href="#ContacForm" className="navbar-link">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;


