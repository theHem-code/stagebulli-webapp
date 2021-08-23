import React from "react";
import { NavLink } from "react-router-dom";
import Video from "./Video";
import Bulli from "../images/Bulli-Service.png";

const Service = () => {
  return (
    <div>
      <main
        id="service"
        className="container service-container"
        // style={{ marginBottom: "200px" }}
      >
        <section className="row header">
          <h4>Deine Wahl. Wir liefern.</h4>
        </section>
        <div className="bulliframe-wrapper">
          <img src={Bulli} alt="bulliframe" className="bulli-service" />

          <div className="button-artists">
            <NavLink to="/kuenstlervorschlaege">
              Entertainmentvorschläge
            </NavLink>
            <div className="button-line"></div>
          </div>
        </div>
      </main>
      <Video />
    </div>
  );
};

export default Service;

