import { NavLink, Outlet } from "react-router-dom";
import "./css/Nav.css";
import burgerBar from "./images/burger-bar.png";
import { useState } from "react";
import React from "react";

export default function Navigation() {
  const [toggleMenu, setToggleMenu] = useState("firstRender");
  /* const [screenSize, setScreenSize] = useState(getCurrentDimension()); */

  const toggle = () => {
    if (window.innerWidth > 600) {
      setToggleMenu("open");
    } else if (window.innerWidth < 600 && toggleMenu === "firstRender") {
      setToggleMenu("open");
    } else if (toggleMenu === "closed") {
      setToggleMenu("open");
    } else if (toggleMenu === "open") {
      setToggleMenu("closed");
    }
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 600) {
      setToggleMenu("open");
    }
  });

  if (toggleMenu === "firstRender" && window.innerWidth < 600) {
    return (
      <>
        <div className="mobile-menu-btn" onClick={toggle}>
          <img id="mobileMenu" src={burgerBar} alt="menu"></img>
        </div>
        <main>
          <Outlet />
        </main>
      </>
    );
  } else if (toggleMenu === "open" || toggleMenu === "firstRender") {
    return (
      <>
        <header>
          <nav id="nav">
            <NavLink className="navButton" to="/" onClick={toggle}>
              Home
            </NavLink>
            <NavLink className="navButton" to="projects" onClick={toggle}>
              Projects
            </NavLink>
            <NavLink className="navButton" to="about" onClick={toggle}>
              Resume
            </NavLink>
            <NavLink className="navButton" to="contact" onClick={toggle}>
              Contact
            </NavLink>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </>
    );
  } else if (toggleMenu === "closed") {
    return (
      <>
        <div className="mobile-menu-btn" onClick={toggle}>
          <img id="mobileMenu" src={burgerBar} alt="menu"></img>
        </div>
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}
