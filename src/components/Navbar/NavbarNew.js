import React, { useState, useEffect, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaFacebook, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../../images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import "./NavbarNew.css";
// import Bulliframe from "./components/Bulliframe";

const NavbarNew = () => {
  const [clicked, setClicked] = useState(false);
  // const [logoVisible, setLogoVisible] = useState("visible");
  // const [bframe, setBframe] = useState(null);
  // const [location, setLocation] = useState({});

  const handleClick = () => {
    setClicked(!clicked);
  };

  const hide = () => {
    setClicked(false);
  };

  const bframe = useRef(null);

  useEffect(() => {
    const bulliElement = document.getElementById("frame");
    if (bulliElement) {
      window.addEventListener("resize", () =>
        bulliElement.classList.add("hidden")
      );
    }
    return () =>
      window.removeEventListener("resize", () =>
        bulliElement.classList.add("hidden")
      );
  }, []);


  const handleFrame0 = () => {
    if (bframe && bframe.current) {
      bframe.current.classList.remove("frame3");
      bframe.current.classList.remove("frame1");
      bframe.current.classList.remove("frame2");
      bframe.current.classList.add("hidden");
      const offsetLeft = document.getElementById("link0").offsetLeft;
      const frameSpacerToCenterBulli = -205;
      bframe.current.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
      bframe.current.style.opacity = 0;
    }
  };

  const handleFrame1 = () => {
    if (bframe && bframe.current) {
      bframe.current.classList.remove("hidden");
      bframe.current.classList.remove("frame2");
      bframe.current.classList.remove("frame3");
      bframe.current.classList.add("frame1");
      const offsetLeft = document.getElementById("link1").offsetLeft;
      const frameSpacerToCenterBulli = -17;
      bframe.current.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
      bframe.current.style.opacity = 1;
    }
  };

  const handleFrame2 = () => {
    if (bframe && bframe.current) {
      bframe.current.classList.remove("hidden");
      bframe.current.classList.remove("frame1");
      bframe.current.classList.remove("frame3");
      bframe.current.classList.add("frame2");
      const offsetLeft = document.getElementById("link2").offsetLeft;
      const frameSpacerToCenterBulli = -13;
      bframe.current.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
      bframe.current.style.opacity = 1;
    }
  };

  const handleFrame3 = () => {
    bframe && bframe.current &&
    bframe.current.classList.remove("hidden");
    bframe.current.classList.remove("frame1");
    bframe.current.classList.remove("frame2");
    bframe.current.classList.add("frame3");
    const offsetLeft = document.getElementById("link3").offsetLeft;
    const frameSpacerToCenterBulli = -11;
    bframe.current.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
    bframe.current.style.opacity = 1;
  };

  const mylocation = useLocation();

  const renderVisibility = mylocation.pathname === "/" ? "visible" : "hidden";

  const linkForLogo =
    mylocation.pathname === "/" ? (
      <Link
        activeClass="active"
        id="link0"
        to="start"
        spy={true}
        smooth={true}
        className="logo-wrapper"
        offset={-130}
        duration={1150}
        onClick={hide}
        onSetActive={handleFrame0}
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
      <div className={clicked ? "nav-menu active" : "nav-menu"}>
        <Link
          activeClass="active"
          to="mieten"
          id="link1"
          spy={true}
          smooth={true}
          offset={-130}
          duration={150}
          style={{ visibility: `${renderVisibility}` }}
          className="nav-links"
          onClick={hide}
          onSetActive={handleFrame1}
        >
          Mieten
        </Link>

        <Link
          activeClass="active"
          to="service"
          id="link2"
          spy={true}
          smooth={true}
          offset={-130}
          duration={150}
          className="nav-links"
          onClick={handleClick}
          onSetActive={handleFrame2}
          style={{ visibility: `${renderVisibility}` }}
        >
          Service
        </Link>

        <Link
          activeClass="active"
          to="kontakt"
          id="link3"
          spy={true}
          smooth={true}
          offset={-30}
          duration={150}
          className="nav-links"
          onClick={handleClick}
          onSetActive={handleFrame3}
          style={{ visibility: `${renderVisibility}` }}
        >
          Kontakt
        </Link>
        {/* <Bulliframe
          displayBulli={displayBulli}
          renderVisibility={renderVisibility}
          setFrame={setFrame}
          location={location}
        /> */}
        <div
          id="frame"
          className="hidden"
          style={{ visibility: `${renderVisibility}` }}
          ref={bframe}
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

export default NavbarNew;
