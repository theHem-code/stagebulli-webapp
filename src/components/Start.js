import React from "react";
import Banner from "../images/StartBanner.jpg";
// import { NavLink } from "react-router-dom";
import Button from "./Button"

// import CookieConsent from "react-cookie-consent";

const Start = () => {
  return (
    <main id="start" className="container-start">
      {/* <div className="container"> */}
        <section className="row header-start">
          {/* <div className="col-12"> */}
            <h4>
              Vom Bulli zur Bühne
            </h4>
          {/* </div> */}
      </section>
      {/* </div> */}
        <div
          className="banner"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)), url(${Banner})`,
          }}
          >
        
          <Button title="Unsere Story" link="/unserestory" story="story"/>
          {/* <div className="button-story">
            <NavLink to="/unserestory">Unsere Story</NavLink>
            <div className="button-line-start"></div>
          </div> */}
        </div>
    </main>
  );
};

export default Start;
