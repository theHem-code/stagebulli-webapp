import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "50px",
        backgroundColor: "#f1f1f1",
        position: "fixed",
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          justifyContent: "space-around",
          alignItems: "center",
          position: "fixed",
          top: "0",
          width: "800px",
          margin: "0",
          height: "50px",
        }}
      >
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
      </ul>
    </div>
  );
};

export default Navbar;
