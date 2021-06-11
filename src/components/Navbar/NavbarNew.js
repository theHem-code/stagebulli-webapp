import React, { useState } from "react";
import Logo from "../../images/Logo.png";
import { Link } from "react-scroll";
import {
  FaFacebook,
  FaLinkedin,
  FaHome,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import "./Navbar.css";

const NavbarNew = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <IconContext.Provider
      value={{ color: "black", className: "menu-icon" }}
    >
      <nav className="NavbarItems">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" className="navbar-logo" />
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            {/* <Link
              activeClass="active"
              to="mieten"
              spy={true}
              smooth={true}
              offset={-160}
              duration={150}
              className="nav-links"
            >
              Mieten
            </Link> */}
            <a href="#" className="nav-links">Mieten</a>
          </li>
          <li>
            {/* <Link
              activeClass="active"
              to="service"
              spy={true}
              smooth={true}
              offset={-160}
              duration={150}
              className="nav-links"
            >
              Service
            </Link> */}
            <a href="#" className="nav-links">Service</a>
          </li>
          <li>
            {/* <Link
              activeClass="active"
              to="kontakt"
              spy={true}
              smooth={true}
              offset={-160}
              duration={150}
              className="nav-links"
            >
              Kontakt
            </Link> */}
            <a href="#" className="nav-links">Kontakt</a>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default NavbarNew;
