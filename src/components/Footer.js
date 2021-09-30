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
        {/* <div className="social">
          <ul className="icons">
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
        </div> */}
      </div>
    </section>
  );
};

export default Footer;
