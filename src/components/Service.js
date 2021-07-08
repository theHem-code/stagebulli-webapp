import React from "react";
import { NavLink } from "react-router-dom";
import Video from "./Video";

const Service = () => {
  return (
    <div>
      <div id="service" className="container" style={{height: "100vh"}}>
        <section className="row header">
          <h4>Deine Wahl. Wir liefern.</h4>
        </section>
        <div className="bulliframe-wrapper">
          <div className="bulliframe">
            <div className="frame-content">
              <article>
                <h3>BULLIPAKET</h3>
                <p>
                  Mobile PopUp-Bühne für Dein Event.
                  <br />
                  <span style={{ color: "#f15025" }}>
                    {" "}
                    Du kümmerst dich um den Rest.
                  </span>
                </p>
              </article>
              <article>
                <h3>+ TECHNIKPAKET </h3>
                <p>
                  State-of-the-art Ton- & Lichttechnik. <br />
                  <span style={{ color: "#f15025" }}>
                    Schicke uns deine Anforderungen.
                  </span>
                </p>
              </article>
              <article>
                <h3>+ ENTERTAINMENTPAKET </h3>
                <p>
                  Livebands & Künstler mit Wow-Effekt. <br />
                  <span style={{ color: "#f15025" }}>Lass uns mal machen.</span>
                </p>
              </article>
            </div>
          </div>
          <div className="button-artists">
            <NavLink to="/kuenstlervorschlaege">Entertainmentvorschläge</NavLink>
            <div className="button-line"></div>
          </div>
        </div>
      </div>
      <Video />
    </div>
  );
};

export default Service;
