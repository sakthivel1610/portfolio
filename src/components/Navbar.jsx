import React, { useState } from 'react';
import menu from '../assets/menu.png';

function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector(".navbar").offsetHeight; 
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  
    window.scrollTo({
      top: elementPosition - navbarHeight - 10, // Adjust offset
      behavior: "smooth",
    });
  };
  


  const [isSideNavbarOpen, setSideNavbarOpen] = useState(false);

  
  const toggleSideNavbar = () => {
    setSideNavbarOpen(!isSideNavbarOpen); 
  };

  return (
    <>
      <div className="navbar">
        <h2 className="navbar__head">Portfolio</h2>
        <div className="navbar__items">
          <button onClick={()=>scrollToSection("home")}>Home</button>
           <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={()=>scrollToSection("skills")}>Skills</button>
          <button onClick={()=>scrollToSection("project")}>Projects</button>
          <button onClick={()=>scrollToSection("contact")}>Contact</button>
        </div>
        <img
          src={menu}
          alt="Menu"
          className="menubar"
          onClick={toggleSideNavbar}
        />
      </div>

      
      <div className={`side__navbar ${isSideNavbarOpen ? 'open' : ''}`} style={{display:"flex",justifyContent:"space-between"}}>
        <div className="side__navbar__items">
        <button onClick={()=>scrollToSection("home")}>Home</button>
           <button onClick={() => scrollToSection("about")}>About</button>
          <button onClick={()=>scrollToSection("skills")}>Skills</button>
          <button onClick={()=>scrollToSection("project")}>Projects</button>
          <button onClick={()=>scrollToSection("contact")}>Contact</button>
        </div>
        <h2 onClick={toggleSideNavbar} style={{cursor:"pointer",marginRight:"20px"}}>X</h2>
      </div>
    </>
  );
}

export default Navbar;
