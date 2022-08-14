import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Header() {
  
  const [active, setActive] = useState("nav_menu");
  const [icon, setIcon] = useState("nav_toggler");


  const navToggle = () => { 
    if (active === "nav_menu"){
      // setActive("nav_menu nav_active")
      setActive("nav_menu_active nav_active")
    } else setActive("nav_menu")

      if(icon === 'nav_toggler'){
      setIcon('nav_toggler')
    }else setIcon('nav_toggler')
  }

  return (
    <>
      <header>
        <div className="headerContainer flexSB">
          <div className="logo">
            <h1>pp</h1>
          </div>

          <nav>
            <ul className={active}>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div id="bar" onClick={navToggle} className={icon}>
            <FaBars />
          </div>
        </div>
      </header>
    </>
  );
}
