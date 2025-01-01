import React from "react";
import './Navbar.css';
import Logonav from './logo.webp';

const Navbar = () => {
    return (
        <>
            <nav className="navbar">
            <div className="navbar-left">
            <a  className="logo-withname">
              <img className='logo-in-nav' src={Logonav}></img>
            enzo
            </a>
            </div>
            <div className="navbar-center">
    <ul className="nav-links">
      <li>
        <a href="/products">Swap</a>
      </li>
      <li>
        <a href="/about">Portfolio</a>
      </li>
      <li>
        <a href="/contact">Support</a>
      </li>
    </ul>
  </div>
  <div className="navbar-right">
  <button className="Connect-button">Connect</button>
  </div>
            </nav>
        </>
        );
};

export default Navbar;