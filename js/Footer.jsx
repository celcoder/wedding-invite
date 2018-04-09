import React from 'react';
import GoogleMap from './GoogleMap';
import './styles/Footer.css';

const Footer = () => (
  <div className="footer-container">
    <GoogleMap />
    <div className="footer-text-container">
      <p id="made-by">
        Designed by <a href="" className="url-link">Jesse</a> and coded by <a href="" className="url-link">Ethan</a> with <span role="img" aria-label="Heart" id="heart">❤️</span>
      </p>
    </div>
  </div>
);

export default Footer;
