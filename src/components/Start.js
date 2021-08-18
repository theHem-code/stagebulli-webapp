import React from "react";
import Banner from "../images/StartBanner.jpg";
import { NavLink } from "react-router-dom";

const Start = () => {
  return (
    <main id="start" className="container-start">
      <div className="container">
        <section className="row header-start">
          <div className="col-12 mb-3">
            <h4>
              Vom PickUp
              <br />
              zur PopUp-Stage
            </h4>
          </div>
        </section>
      </div>
      <div
        className=" col-12 banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${Banner})`,
        }}
      >
        <div className="button-story">
          <NavLink to="/unserestory">Unsere Story</NavLink>
          <div className="button-line-start"></div>
        </div>
      </div>
    </main>
  );
};

export default Start;

