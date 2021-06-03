import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer">
        <NavLink
          activeStyle={{
            color: "gray",
          }}
          to="/impressum"
        >
          Impressum
        </NavLink>
        <NavLink
          activeStyle={{
            color: "gray",
          }}
          to="/datenschutz"
        >
          Datenschutz
        </NavLink>
      </div>
    </section>
  );
};

export default Footer;
