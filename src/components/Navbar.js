import React, { useRef } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="start" spy={true} smooth={true}>
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      <ul className="nav-titles">
        <li>
          <Link to="mieten" spy={true} smooth={true}>
            Mieten
          </Link>
        </li>
        <li>
          <Link to="service" spy={true} smooth={true}>
            Service
          </Link>
        </li>
        <li>
          <Link to="kontakt" spy={true} smooth={true}>
            Kontakt
          </Link>
        </li>
        <div className="animation"></div>
      </ul>
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
            <FaYoutube />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
