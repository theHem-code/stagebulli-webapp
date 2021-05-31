import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../images/Logo.png";

// service 808, mieten 545,  kontakt 1078

const Navbar = () => {
  const [pixelLeft, setPixelLeft] = useState(0);
  const [visible, setVisible] = useState("hidden");

  const clickMieten = () => {
    setPixelLeft(-250);
    setVisible("visible");
  };
  const clickService = () => {
    setPixelLeft(12);
    setVisible("visible");
  };
  const clickKontakt = () => {
    setPixelLeft(280);
    setVisible("visible");
  };

  return (
    <nav className="navbar">
      <Link activeClass="active" to="start" spy={true} smooth={true}>
        <img src={Logo} alt="Logo" className="logo" />
      </Link>

      <div className="nav-titles">
        <Link
          activeClass="active"
          to="mieten"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={clickMieten}
        >
          Mieten
        </Link>
        <Link
          activeClass="active"
          to="service"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={clickService}
        >
          Service
        </Link>
        <Link
          activeClass="active"
          to="kontakt"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={clickKontakt}
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
