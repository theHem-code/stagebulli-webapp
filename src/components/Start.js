import React from "react";
import Banner from "../images/StartBanner.jpg";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <main id="start" className="start-block">
      <div className="container">
        <section className="row header-start">
          <div className="col-12">
            <h4>
              Vom PickUp
              <br />
              zur PopUp-Stage
            </h4>
          </div>
        </section>
      </div>
      <div
        className="banner"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${Banner})`,
        }}
      >
        <div className="button-story">
          <Link to="/unserestory">Unsere Story</Link>
          <div className="button-line-start"></div>
        </div>
      </div>
    </main>
  );
};

export default Start;
