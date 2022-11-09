import React from "react";
import Button from './Button'
// import { NavLink } from "react-router-dom";
import events from "../images/events.jpg";
import celebrations from "../images/wedding.jpg";
import corporate from "../images/corporate.jpg";
// import Aos from "aos";
import "aos/dist/aos.css";

const Mieten = () => {
  return (
    <div id="mieten" className="container container-mieten">
      <div className="row mieten-header">
        <section className="col-12">
          <h4>Sahnehäubchen für...</h4>
        </section>
      </div>
      <div className="row cards">
        <div className="col-sm-12 card">
          <img src={corporate} alt="corporate_image" />
          <div className="desc">
            <h3>Corporate</h3>
            <p>
            Vorfreude! Kunden & Mitarbeiter <br />mit etwas Besonderem überraschen.
            </p>
          </div>
        </div>
        <div className="col-sm-12 card">
          <img src={events} alt="events" />
          <div className="desc">
            <h3>Events</h3>
            <p>
            Unser All-In-One-Paket
            <br />verwandelt jeden Ort in ein Festival.
            </p>
          </div>
        </div>
        <div className="col-sm-12 card">
          <img src={celebrations} alt="celebrations" />
          <div className="desc">
            <h3>Weddings</h3>
            <p>
            Musik verbindet.<br />
            Gönn' dir Momente für die Ewigkeit.
            </p>
          </div>
        </div>
      </div>
      <Button title="Impressionen" link="/impressionen" />
      {/* <div className="button-impressionen">
        <NavLink to="/impressionen"><span>Impressionen</span></NavLink>
        <div className="button-line-mieten"></div>
      </div> */}
    </div>
  );
};

export default Mieten;
