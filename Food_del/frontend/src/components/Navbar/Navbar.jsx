// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';
const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar_menu">
        <li>Home</li>
        <li>Menu</li>
        <li>Mobile-App</li>
        <li>Contect Us</li>
      </ul>
      <div className="navbar-right">
        <img src= {assets.search_icon}alt="" />
        <div className="navbar-search_icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
        </div>
        <button>Sing In</button>
      </div>
    </div>
  );
}

export default Navbar;
