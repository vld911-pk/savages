import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import SignBtn from './Nav_components/Sign_Button';

function NavBar(){
    return (
       <>
        <div className = "navbar">
           <div className = "logo-wrapper">
               <h1 className = "logo" >FS</h1>
           </div>
           <NavLink to = "/register"><SignBtn /></NavLink>
        </div>
       </>
    );
}
export default NavBar;