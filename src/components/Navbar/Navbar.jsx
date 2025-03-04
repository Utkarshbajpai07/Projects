// eslint-disable-next-line no-unused-vars
import React,{useContext, useState} from 'react';
import './Navbar.css'
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [Menu,setMenu]=useState("menu")
  const {getTotalCartAmount} =useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to ='/' ><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar_menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={Menu==="Home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={Menu==="Menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={Menu==="Mobile-app"?"active":""}>Mobile-App</a>
        <a href='#footer' onClick={()=>setMenu("Contact-us")} className={Menu==="Contact-us"?"active":""}>Contect Us</a>
      </ul>
      <div className="navbar-right">
        <img src= {assets.search_icon}alt="" />
        <div className="navbar-search_icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sing In</button>
      </div>
    </div>
  );
}

export default Navbar;
