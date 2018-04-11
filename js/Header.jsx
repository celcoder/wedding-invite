import React from 'react';
import './styles/Header.css';
/* in production change src="./js" to public/js" */
const Header = () => (
  <div className="header-container">
    <div className="header-banner-container">
      <div className="header-banner-content">
        <p id="header-text-first">The Wedding Celebration of</p>
        <img id="header-banner-img" src="./js/assets/img/banner_header.png" alt="" />
        <p id="header-text-last">05.28.18 Memorial Day 7PM</p>
      </div>
    </div>
  </div>
);

export default Header;
