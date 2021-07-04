import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../../images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import "./NavbarNew.css";
import Bulliframe from "./components/Bulliframe";

const NavbarNew = () => {
  const [clicked, setClicked] = useState(false);
  const [pixelLeft, setPixelLeft] = useState(0);
  const [visible, setVisible] = useState("visible");
  const [logoVisible, setLogoVisible] = useState("visible");
  const [location, setLocation] = useState({});

  // const clickMieten = () => {
  //   setPixelLeft(21.5);
  //   setVisible("visible");
  //   setLogoVisible("hidden");
  // };
  // const clickService = () => {
  //   setVisible("visible");
  //   setPixelLeft(34.9);
  //   setLogoVisible("hidden");
  // };
  // const clickKontakt = () => {
  //   setPixelLeft(68.8);
  //   setVisible("visible");
  //   setLogoVisible("hidden");
  // };

  // const hideFrame = () => {
  //   setVisible("hidden");
  //   setPixelLeft(-416);
  // };

  const handleClick = () => {
    setClicked(!clicked);
  };
  const setFrame = (coordinates) => {
    setLocation(coordinates);
  };

  const displayBulli = (e) => {
    // const element = e.target;
    const tempTag = e.target.getBoundingClientRect();
    const center = (tempTag.left + tempTag.right) / 2;
    setFrame({ center });
  };

  //   window.onscroll = function () {
  //     // console.log(window.pageYOffset);
  //     if (window.pageYOffset <= 934) {
  //       setLogoVisible("visible");
  //     } else {
  //       setLogoVisible("hidden");
  //     }
  //   };

  const uselocation = useLocation();
  const renderVisibility = uselocation.pathname === "/" ? "visibile" : "hidden";

  const linkForLogo =
    uselocation.pathname === "/" ? (
      <Link
        activeClass="active"
        to="start"
        spy={true}
        smooth={true}
        className="logo-wrapper"
        offset={-150}
        duration={150}
        // onSetActive={hideFrame}
      >
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          // style={{ visibility: `${logoVisible}` }}
        />
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
    <nav className="NavbarItems nav">
      <IconContext.Provider value={{ color: "black", className: "menu-icon" }}>
        <div className="navbar-logo">{linkForLogo}</div>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaBars />}
        </div>
      </IconContext.Provider>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            activeClass="active"
            to="mieten"
            spy={true}
            smooth={true}
            offset={-160}
            // onSetActive={displayBulli}
            duration={150}
            onClick={displayBulli}
            style={{ visibility: `${renderVisibility}`, color: "#212121" }}
            className="nav-links"
          >
            Mieten
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="service"
            spy={true}
            smooth={true}
            offset={-160}
            duration={150}
            className="nav-links"
            onClick={displayBulli}
            // onSetActive={clickService}
            duration={150}
            style={{ visibility: `${renderVisibility}`, color: "#212121" }}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="kontakt"
            spy={true}
            smooth={true}
            offset={-30}
            duration={150}
            className="nav-links"
            onClick={displayBulli}
            // onSetActive={clickKontakt}
            style={{ visibility: `${renderVisibility}`, color: "#212121" }}
          >
            Kontakt
          </Link>
          <Bulliframe
            displayBulli={displayBulli}
            // pixelLeft={pixelLeft}
            setFrame={setFrame}
            location={location}
          />
        </li>
      </ul>
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

export default NavbarNew;
