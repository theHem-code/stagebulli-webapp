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
  const [visible, setVisible] = useState("hidden");
  // const [logoVisible, setLogoVisible] = useState("visible");
  const [location, setLocation] = useState({});

  const setFrame = (coordinates) => {
    setLocation(coordinates);
  };
  
  const displayBulli = (e) => {
    const menuElement = e.target.getBoundingClientRect();
    const center = (menuElement.left + menuElement.right) / 2;
    const left = menuElement.left;
    setFrame({ center, left });
  };

  const hideFrame = () => {
    setVisible("hidden");
  };
  const handleClick = () => {
    setClicked(!clicked);
  };

  const mylocation = useLocation();

  const renderVisibility = mylocation.pathname === "/" ? "visible" : "hidden";

  const linkForLogo =
    mylocation.pathname === "/" ? (
      <Link
        activeClass="active"
        to="start"
        spy={true}
        smooth={true}
        className="logo-wrapper"
        offset={-130}
        duration={150}
        onSetActive={hideFrame}
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
            // style={{ visibility: `${logoVisible}` }}
          />
        </div>
      </NavLink>
    );

  return (
    <nav className="NavbarItems">
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
            offset={-130}
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
            offset={-130}
            duration={150}
            className="nav-links"
            onClick={displayBulli}
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
            style={{ visibility: `${renderVisibility}`, color: "#212121" }}
          >
            Kontakt
          </Link>
          <Bulliframe
            displayBulli={displayBulli}
            renderVisibility={renderVisibility}
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
