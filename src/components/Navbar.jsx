import React from 'react';

import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Logo</div>
      <ul>
        <li>Home</li>
        <li>Servicios</li>
        <li>Menu</li>
        <li>Galeria</li>
        <li>Contactanos</li>
      </ul>
    </nav>
  );
};

export default Navbar;