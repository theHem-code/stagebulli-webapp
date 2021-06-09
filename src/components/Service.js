import React from "react";
import { NavLink } from "react-router-dom";
import Video from "./Video";

const Service = () => {
  return (
    <div id="service">
      <section className="header">
        <h4>Deine Wahl. Wir liefern.</h4>
      </section>
      <div className="bulliframe-wrapper">
        <div className="bulliframe">
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
        <div className="button-artists">
          <NavLink to="/kuenstlervorschlaege">Künstlervorschläge</NavLink>
          <div className="button-line">
          </div>
        </div>
      </div>
      <Video />
    </div>
  );
};

export default Service;
