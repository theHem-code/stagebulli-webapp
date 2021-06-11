import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaLinkedin,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [pixelLeft, setPixelLeft] = useState(300);
  const [visible, setVisible] = useState("hidden");
  const [logoVisible, setLogoVisible] = useState("visible");
  const [clicked, setClicked] = useState(false);

  const clickMieten = () => {
    setPixelLeft(50);
    setVisible("visible");
    setLogoVisible("hidden");
  };
  const clickService = () => {
    setVisible("visible");
    setPixelLeft(250);
    setLogoVisible("hidden");
  };
  const clickKontakt = () => {
    setPixelLeft(452);
    setVisible("visible");
    setLogoVisible("hidden");
  };

  const hideFrame = () => {
    setVisible("hidden");
    setPixelLeft(-416);
  };

  const handleClick = () => {
    setClicked(!clicked)
  }

  window.onscroll = function () {
    // console.log(window.pageYOffset);
    if (window.pageYOffset <= 934) {
      setLogoVisible("visible");
    } else {
      setLogoVisible("hidden");
    }
  };

  const location = useLocation();
  const renderVisibility = location.pathname === "/" ? "visibile" : "hidden";

  const linkForLogo =
    location.pathname === "/" ? (
      <Link
        activeClass="active"
        to="start"
        spy={true}
        smooth={true}
        className="logo-wrapper"
        offset={-150}
        duration={150}
        onSetActive={hideFrame}
      >
        {logoVisible === "hidden" ? (
          <FaHome className="btn-home" style={{ transition: "1.5s" }} />
        ) : (
          <img
            src={Logo}
            alt="Logo"
            className="logo"
            style={{ visibility: `${logoVisible}` }}
          />
        )}
      </Link>
    ) : (
      <NavLink to="/">
        <div className="logo-wrapper">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
            style={{ visibility: `${logoVisible}` }}
          />
        </div>
      </NavLink>
    );

  return (
    <nav className="navbar">
      {linkForLogo}
      <div className="menu-icon" onClick={handleClick}>{clicked ? <FaTimes /> : <FaBars />}</div>
      <div className="nav-titles">
        <Link
          activeClass="active"
          to="mieten"
          spy={true}
          smooth={true}
          offset={-160}
          onSetActive={clickMieten}
          duration={150}
          style={{ visibility: `${renderVisibility}`, color: "#212121" }}
        >
          Mieten
        </Link>
        <Link
          activeClass="active"
          to="service"
          spy={true}
          smooth={true}
          offset={-160}
          onSetActive={clickService}
          duration={150}
          style={{ visibility: `${renderVisibility}`, color: "#212121" }}
        >
          Service
        </Link>
        <Link
          activeClass="active"
          to="kontakt"
          spy={true}
          smooth={true}
          offset={-140}
          duration={150}
          onSetActive={clickKontakt}
          style={{ visibility: `${renderVisibility}`, color: "#212121" }}
        >
          Kontakt
        </Link>
        <div
          className="animation"
          style={{ left: `${pixelLeft}px`, visibility: `${visible}` }}
        ></div>
      </div>
      <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/stagebulli">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/stagebulli/">
            <GrInstagram />
          </a>
        </li>
        <li>
          <a href="https://de.linkedin.com/in/felix-franke">
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
