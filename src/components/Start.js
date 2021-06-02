import React from "react";
import Banner from "../images/StartBanner.jpg";
import { Link } from "react-router-dom";


const Start = () => {
  return (
    <main id="start" style={{ height: "100vh", paddingTop: "100px" }}>
      <section className="header-start">
        <h1>Stage Bulli</h1>
        <h4>
          Vom PickUp <br /> zur PopUp-Stage
        </h4>
      </section>
      <div className="banner" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="button-story">
          <Link to="/unserestory">Unsere Story</Link>
          <div className="button-line-start"></div>
        </div>
      </div>
    </main>
  );
};

export default Start;