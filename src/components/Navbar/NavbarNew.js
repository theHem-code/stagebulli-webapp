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
  const [logoVisible, setLogoVisible] = useState("visible");
  const [bframe, setBframe] = useState(null);
  // const [location, setLocation] = useState({});

  const handleClick = () => {
    setClicked(!clicked);
  };

  const hide = () => {
    setClicked(false);
  };

  // const setFrame = (coordinates) => {
  //   setLocation(coordinates);
  // };

  // const displayBulli = (e) => {
  //   const navLink = e.target.getBoundingClientRect();
  //   console.log(navLink)
  //   // const center = (navLink.left + navLink.right) / 2;
  //   const left = navLink.left;
  //   setFrame({ left });
  // };

  const container = useRef(bframe);

  useEffect(() => {
    const frame = container.current;
    setBframe(frame);
  }, []);

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
    bframe.classList.remove("frame3");
    bframe.classList.remove("frame1");
    bframe.classList.remove("frame2");
    bframe.classList.add("hidden");
    const offsetLeft = document.getElementById("link0").offsetLeft;
    const frameSpacerToCenterBulli = -205;
    bframe.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
    bframe.style.opacity = 0;
  };

  const handleFrame1 = () => {
    bframe.classList.remove("hidden");
    bframe.classList.remove("frame2");
    bframe.classList.remove("frame3");
    bframe.classList.add("frame1");
    const offsetLeft = document.getElementById("link1").offsetLeft;
    const frameSpacerToCenterBulli = -17;
    bframe.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
    bframe.style.opacity = 1;
  };

  const handleFrame2 = () => {
    bframe.classList.remove("hidden");
    bframe.classList.remove("frame1");
    bframe.classList.remove("frame3");
    bframe.classList.add("frame2");
    const offsetLeft = document.getElementById("link2").offsetLeft;
    const frameSpacerToCenterBulli = -13;
    bframe.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
    bframe.style.opacity = 1;
  };

  const handleFrame3 = () => {
    bframe.classList.remove("hidden");
    bframe.classList.remove("frame1");
    bframe.classList.remove("frame2");
    bframe.classList.add("frame3");
    const offsetLeft = document.getElementById("link3").offsetLeft;
    const frameSpacerToCenterBulli = -10;
    bframe.style.left = `calc(${offsetLeft}px + ${frameSpacerToCenterBulli}px)`;
    bframe.style.opacity = 1;
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
        onClick={hide}
        onSetActive={handleFrame0}
      >
        <img
          src={Logo}
          alt="Logo"
          className="logo"
          style={{ visibility: `${logoVisible}` }}
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
          duration={150}
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
          ref={container}
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

