import React from "react";
import { Link } from "react-router-dom";
import events from "../images/events.jpg";
import celebrations from "../images/celebrations.jpg";
import corporate from "../images/corporate.jpg";

const Mieten = () => {
  return (
    <div id="mieten" className="container">
      <section className="header">
        <h4>Sahnehäubchen für...</h4>
      </section>
      <div className="wrapper">
        <div className="cards">
          <div className="card">
            <img src={corporate} alt="" />
            <div className="desc">
              <h3>Corporate</h3>
              <p>
                Mini-Festival mit Kunden <br />& Mitarbeitern feiern.
              </p>
            </div>
          </div>
          <div className="card">
            <img src={events} alt="" />
            <div className="desc">
              <h3>Events</h3>
              <p>
                Publikumsmagnet auf Festivals,
                <br /> Messen & Roadshows
              </p>
            </div>
          </div>
          <div className="card">
            <img src={celebrations} alt="" />
            <div className="desc">
              <h3>Celebrations</h3>
              <p>
                Entertainment für <br />
                besondere Momente
              </p>
            </div>
          </div>
        </div>
        <div className="button-impressionen">
          <Link to="/impressionen">Live-Impressionen</Link>
          <div className="button-line bounce"></div>
        </div>
      </div>
    </div>
  );
};

export default Mieten;