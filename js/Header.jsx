import React from 'react';
import './styles/Header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-banner-container">
      <div className="header-banner-content">
        <p id="header-text-first">THE WEDDING CELEBRATION OF</p>
        <img src="./js/img/banner_header.png" alt="" />
        <p id="header-text-last">05.28.18 MEMORIAL DAY 7PM</p>
      </div>
    </div>
  </div>
);

export default Header;
