import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaHome } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../images/Logo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [pixelLeft, setPixelLeft] = useState(300);
  const [visible, setVisible] = useState("hidden");
  const [logoVisible, setLogoVisible] = useState("visible");

  const clickMieten = () => {
    setPixelLeft(50);
    setVisible("visible");
    setLogoVisible("hidden");
  };
  const clickService = () => {
    setPixelLeft(250);
    setVisible("visible");
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

  window.onscroll = function () {
    //console.log(window.pageYOffset);
    if (window.pageYOffset <= 788) {
      setLogoVisible("visible");
    } else {
      setLogoVisible("hidden");
    }
  };

  const location = useLocation();
  const renderVisibility = location.pathname === "/" ? "visibile" : "hidden";

  return (
    <nav className="navbar">
        <Link
          activeClass="active"
          to="start"
          spy={true}
          smooth={true}
          className="logo-wrapper"
          offset={-140}
          onSetActive={hideFrame}
        >
          {logoVisible === "hidden" ? (
            <FaHome className="btn-home" />
          ) : (
            <img
              src={Logo}
              alt="Logo"
              className="logo"
              style={{ visibility: `${logoVisible}` }}
            />
          )}
        </Link>
      <div className="nav-titles">
        <Link
          activeClass="active"
          to="mieten"
          spy={true}
          smooth={true}
          offset={-160}
          onClick={clickMieten}
          onSetActive={clickMieten}
          style={{ visibility: `${renderVisibility}` }}
        >
          Mieten
        </Link>
        <Link
          activeClass="active"
          to="service"
          spy={true}
          smooth={true}
          offset={-160}
          onClick={clickService}
          onSetActive={clickService}
          style={{ visibility: `${renderVisibility}` }}
        >
          Service
        </Link>
        <Link
          activeClass="active"
          to="kontakt"
          spy={true}
          smooth={true}
          offset={-140}
          onClick={clickKontakt}
          onSetActive={clickKontakt}
          style={{ visibility: `${renderVisibility}` }}
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
