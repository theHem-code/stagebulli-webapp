import React from "react";
import { Link } from "react-router-dom";
import Lizenz from "../images/VWLizenzLogo.png"
// import { FaFacebook, FaLinkedin } from "react-icons/fa";
// import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer">
        <ul className="footer-list">
          <Link to="/impressum">Impressum</Link>
          <Link className="copyright" to="/">
            © 2022 Stage Bulli
          </Link>
          <Link to="/datenschutz">Datenschutz</Link>
        </ul>
        <div style={{ textAlign: "center"}}>
          <img src={Lizenz} alt="VW Lizenz Logo" style={{height: "100px", marginTop: "10px"}} />
        </div>
      </div>
    </section>
  );
};

export default Footer;
