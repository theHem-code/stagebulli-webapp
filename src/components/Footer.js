import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer">
        <ul className="footer-list">
          <Link
            activeStyle={{
              color: "gray",
            }}
            to="/impressum"
          >
            Impressum
          </Link>
          <Link
            activeStyle={{
              color: "gray",
            }}
            to="/"
          >
            © 2021 Stage Bulli
          </Link>
          <Link
            activeStyle={{
              color: "gray",
            }}
            to="/datenschutz"
          >
            Datenschutz
          </Link>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
