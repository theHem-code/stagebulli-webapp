import React from "react";
import { Link } from "react-router-dom";
// import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer">
        <ul className="footer-list">
          <Link to="/impressum">Impressum</Link>
          <Link className="copyright" to="/">
            © 2021 Stage Bulli
          </Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
