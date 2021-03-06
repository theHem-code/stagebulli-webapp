import React from "react";
import Banner from "../images/StartBanner.jpg";
// import { NavLink } from "react-router-dom";
import Button from "./Button"

// import CookieConsent from "react-cookie-consent";

const Start = () => {
  return (
    <main id="start" className="container-start">
      {/* <CookieConsent
        location="bottom"
        buttonText="Alles Klar!"
        cookieName="myAwesomeCookieName2"
        style={{
          width: "350px",
          background: "#212121",
          padding: "15px",
          margin: "30px",
          letterSpacing: "1px",
          borderRadius: "4px",
        }}
        buttonStyle={{
          color: "white",
          fontSize: "17px",
          fontWeight: "600",
          backgroundColor: "#212121",
          textTransform: "uppercase",
          borderBottom: "4px solid white",
          letterSpacing: "2px",
        }}
        expires={150}
        overlay={true}
      >
        Diese Website nutzt sogenannte Cookies. Wenn Sie die Website weiter
        nutzen, stimmen Sie der Verwendung von Cookies zu.{" "}
      </CookieConsent> */}
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
