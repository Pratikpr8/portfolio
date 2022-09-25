
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <div className={"topbar " + (navOpen && "active")}>
        <div className="topbar-wrapper">
          <div className="topbar-wrapper__left">
            <div className="logo">
              <h1>pp.</h1>
            </div>
          </div>
          <div
            className="topbar-wrapper__right"
            onClick={() => setNavOpen(!navOpen)}
          >
            {navOpen === true ? <GiCrossedBones /> : <FaBars />}
          </div>
        </div>
      </div>
      <div className={"menu " + (navOpen && "active")}>
             <ul >
               <li onClick={() => setNavOpen(false)}>
                <a href="#home">Home</a>
              </li>
              <li onClick={() => setNavOpen(false)}>
                <a href="#about">About</a>
              </li>
              <li onClick={() => setNavOpen(false)}>
                 <a href="#portfolio">Portfolio</a>
               </li>
               <li onClick={() => setNavOpen(false)}>
                 <a href="#contact">Contact</a>
               </li>
             </ul>
      </div>
    </>
  );
}
