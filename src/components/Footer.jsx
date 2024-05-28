
/* 
import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">Logo</div>
      <ul className="social-links">
        <li><a href="https://www.facebook.com">Facebook</a></li>
        <li><a href="https://www.instagram.com">Instagram</a></li>
        <li><a href="https://www.tiktok.com">TikTok</a></li>
        <li><a href="mailto:email@example.com">Correo</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
 */

import React from 'react';
import '../styles/Footer.css';

import logo from '../assets/pascual1.png';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo-container">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-content">
        <div>© 2024 Mi Empresa</div>
        <div className="social-links">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="https://tiktok.com">TikTok</a>
          <a href="mailto:info@example.com">Correo</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;