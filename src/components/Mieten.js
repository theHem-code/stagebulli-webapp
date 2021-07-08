import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import events from "../images/events.jpg";
import celebrations from "../images/celebrations.jpg";
import corporate from "../images/corporate.jpg";
// import Aos from "aos";
import "aos/dist/aos.css";

const Mieten = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 });
  // }, []);

  return (
    <div id="mieten" className="container container-mieten">
      <div className="row mieten-header">
        <div className="col-12">
          <h4>Sahnehäubchen für...</h4>
        </div>
      </div>
      <div className="row cards">
        <div className="col-12 card">
          <img src={corporate} alt="corporate_image" />
          <div className="desc">
            <h3>Corporate</h3>
            <p>
              Mini-Festival mit Kunden <br />& Mitarbeitern feiern.
            </p>
          </div>
        </div>
        <div className="col-12 card">
          <img src={events} alt="events" />
          <div className="desc">
            <h3>Events</h3>
            <p>
              Publikumsmagnet auf Festivals,
              <br /> Messen & Roadshows
            </p>
          </div>
        </div>
        <div className="col-12 card">
          <img src={celebrations} alt="celebrations" />
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
  );
};

export default Mieten;
