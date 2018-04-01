import React from 'react';
import './styles/Header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-banner-container">
      <div className="header-banner-content">
        <p id="header-text-first">The Wedding Celebration of</p>
        <img src="./js/img/banner_header.png" alt="" />
        <p id="header-text-last">05.28.18 Memorial Day 7PM</p>
      </div>
    </div>
  </div>
);

export default Header;
