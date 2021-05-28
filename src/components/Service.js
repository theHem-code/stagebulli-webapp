import React from "react";
import { Link } from "react-scroll";

const Service = () => {
  return (
    <div id="service" style={{ height: "100vh", paddingTop: "100px" }}>
      <h1>Service</h1>
      <p>
        <Link to="mieten" spy={true} smooth={true}>
          Interne Verlinkung: Mieten
        </Link>
      </p>
    </div>
  );
};

export default Service;
