// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';
const Navbar = () => {

  const [Menu,setMenu]=useState("Home")

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar_menu">
        <li onClick={()=>setMenu("Home")} className={Menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={Menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile-app")} className={Menu==="Mobile-app"?"active":""}>Mobile-App</li>
        <li onClick={()=>setMenu("Contact-us")} className={Menu==="Contact-us"?"active":""}>Contect Us</li>
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
