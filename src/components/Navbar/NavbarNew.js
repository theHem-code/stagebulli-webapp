import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Logo from "../../images/Logo.png";
import { NavLink, useLocation } from "react-router-dom";
import { IconContext } from "react-icons";
import "./NavbarNew.css";
import { computeHeadingLevel } from "@testing-library/react";
// import Bulliframe from "./components/Bulliframe";

const NavbarNew = () => {
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState("hidden");
  const [bframe, setFrame] = useState(null);
  // const [logoVisible, setLogoVisible] = useState("visible");
  // const [location, setLocation] = useState({});

  // const setFrame = (coordinates) => {
  //   setLocation(coordinates);
  // };

  // const displayBulli = (e) => {
  //   const menuElement = e.target.getBoundingClientRect();
  //   const center = (menuElement.left + menuElement.right) / 2;
  //   const left = menuElement.left;
  //   setFrame({ center, left });
  // };
  const container = useRef(bframe);

  useEffect(() => {
    const frame = container.current;
    setFrame(frame);
  }, []);

  const handleFrame0 = () => {
    bframe.classList.remove("frame3");
    bframe.classList.remove("frame1");
    bframe.classList.remove("frame2");
    bframe.classList.add("hidden");
  };

  const handleFrame1 = () => {
    bframe.classList.remove("hidden");
    bframe.classList.remove("frame2");
    bframe.classList.remove("frame3");
    bframe.classList.add("frame1");
  };

  const handleFrame2 = () => {
    bframe.classList.remove("hidden");
    bframe.classList.remove("frame1");
    bframe.classList.remove("frame3");
    bframe.classList.add("frame2");
  };

  const handleFrame3 = () => {
    bframe.classList.remove("hidden");
    bframe.classList.remove("frame1");
    bframe.classList.remove("frame2");
    bframe.classList.add("frame3");
  };

  // const hideFrame = () => {
  //   setVisible("hidden");
  // };

    
    const handleClick = () => {
      // const hamburger = document.querySelector(".hamburger");
      // hamburger.classList.toggle("toggle");
        setClicked(!clicked);
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
        duration={150}
        onClick={handleFrame0}
        // onSetActive={handleFrame0}
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
        {/* <div className="hamburger" onClick={handleClick}>
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div> */}
      </IconContext.Provider>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            activeClass="active"
            id="link1"
            to="mieten"
            spy={true}
            smooth={true}
            offset={-130}
            duration={150}
            // onSetActive={handleFrame1}
            onClick={handleFrame1}
            style={{ visibility: `${renderVisibility}`, color: "#212121" }}
            className="nav-links"
          >
            Mieten
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            id="link2"
            to="service"
            spy={true}
            smooth={true}
            offset={-130}
            duration={150}
            className="nav-links"
            // onSetActive={handleFrame2}
            onClick={handleFrame2}
            duration={150}
            style={{ visibility: `${renderVisibility}`, color: "#212121" }}
          >
            Service
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            id="link3"
            to="kontakt"
            spy={true}
            smooth={true}
            offset={-30}
            duration={150}
            className="nav-links"
            // onSetActive={handleFrame3}
            onClick={handleFrame3}
            style={{ visibility: `${renderVisibility}`, color: "#212121" }}
          >
            Kontakt
          </Link>
          {/* <Bulliframe
            displayBulli={displayBulli}
            renderVisibility={renderVisibility}
            setFrame={setFrame}
            location={location}
          /> */}
        </li>
        <div
          id="frame"
          className="hidden"
          ref={container}
          style={{ visibility: `${renderVisibility}` }}
        >
          <div id="bulli"></div>
        </div>
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
