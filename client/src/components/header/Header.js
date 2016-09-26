import React from 'react';
import './Header.css';

const Header = () => (
  <nav className="Header-container">
    <h2 className="Header-logo">Chingu Central</h2>

    <ul className="Header-nav">
      <li className="Header-nav-item">
        <a className="Header-nav-link" href="#">Cohors</a>
      </li>
      <li className="Header-nav-item">
        <a className="Header-nav-link" href="#">Sign In</a>
      </li>
      <li className="Header-nav-item">
        <a className="Header-nav-link" href="#">Apply</a>
      </li>
    </ul>
  </nav>
);

export default Header;