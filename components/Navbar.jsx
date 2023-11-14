"use client";
import { useEffect } from 'react';
import "../styles/navbar.css"

const Navbar = () => {  
  function menuOnClick() {
    document.getElementById("menu-nav").classList.toggle("show-nav"); 
    document.getElementById("menu-bar").classList.toggle("change-bar");
  }

  return (
   <header className="glass">
      <div className="container">
         <h1>
            <svg width="32px" height="32px" enableBackground="new 0 0 512 512" fill="rgba(255, 255, 255)" version="1.1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
               <path d="m421.4 11.9h-330.8l-77 113.4 242.4 375.6 242.4-375.6-77-113.4zm-98.5 122.8-66.9 301.7-67.9-301.7h134.8zm-125.7-19.8 59.2-76.2 59.2 76.2h-118.4zm138.9-7.3-58.9-75.9h117.8l-58.9 75.9zm-159.2 1.1-59.7-77h119.4l-59.7 77zm-21.4 6.2h-110.9l51.7-76.3 59.2 76.3zm12.9 19.8 66.5 297-191.3-297h124.8zm174.2 0h125.9l-193 299.4 67.1-299.4zm124.8-19.8h-110.8l59.2-76.2 51.6 76.2z"/>
            </svg>
            <span>Krystal Festas</span>
         </h1>
         <div id="menu-bar" onClick={menuOnClick}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
         </div>
      </div>
      <nav className="menu-nav" id="menu-nav">
         <a href="#home">Início</a>
         <a href="#services">Serviços</a>
         <a href="#contact">Contato</a>
      </nav>
   </header>
  );
};

export default Navbar;