import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../images/Logo.png";

// service 808, mieten 545,  kontakt 1078

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link activeClass="active" to="start" spy={true} smooth={true} className="logo-wrapper">
        <img src={Logo} alt="Logo" className="logo"/>
      </Link>

      <div className="nav-titles">
        <Link
          activeClass="active"
          to="mieten"
          spy={true}
          smooth={true}
          offset={-130}
        >
          Mieten
        </Link>
        <Link
          activeClass="active"
          to="service"
          spy={true}
          smooth={true}
          offset={-110}
        >
          Service
        </Link>
        <Link
          activeClass="active"
          to="kontakt"
          spy={true}
          smooth={true}
          offset={-110}
        >
          Kontakt
        </Link>
        {/* <div
          className="animation"
          style={{ transform: `translate(${pixelLeft}px)`, visibility: `${visible}` }}
        ></div> */}
      </div>
      <ul className="social-icons">
        <li>
          <a href="#">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="#">
            <GrInstagram />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
