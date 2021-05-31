import React from "react";
import { Link } from "react-scroll";
import Video from "./Video";

const Service = () => {
  return (
    <div>
      <div id="service" style={{ height: "100vh" }}>
        <h1>Service</h1>
        <p>
          <Link to="mieten" spy={true} smooth={true}>
            Interne Verlinkung: Mieten
          </Link>
        </p>
      </div>
      <div style={{ height: "100vh", paddingTop: "100px" }}>
        <Video />
      </div>
    </div>
  );
};

export default Service;
