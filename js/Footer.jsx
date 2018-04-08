import React from 'react';
import GoogleMap from './GoogleMap';
import './styles/Footer.css';

const Footer = () => (
  <div className="footer-container">
    <GoogleMap />
    <div className="footer-text-container">
      <p id='made-by'>Designed with by Jesse</p>
    </div>
  </div>
);

export default Footer;
