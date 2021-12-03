import React from "react";
// import { NavLink } from "react-router-dom";
import Button from "./Button"
import Video from "./Video";
import Bulli from "../images/Bulli-Service.png";
// import { BsArrowRight } from 'react-icons/bs';
// import { IconContext } from "react-icons";

const Service = () => {
  return (
    <div>
      <div id="service" className="container service-container">
        <section className="row header">
          <h4>Deine Wahl.Wir liefern.</h4>
        </section>
        <div className="bulliframe-wrapper">
          <img src={Bulli} alt="bulliframe" className="bulli-service" />
        </div>
        <Button title="Entertainment-Ideen" link="/kuenstlervorschlaege"/>
        {/* <div className="button-artists">
          <div className="button-line-top"></div>
          <NavLink to="/kuenstlervorschlaege">Entertainment-Ideen</NavLink>
          <div className="button-line-artist"></div>
        </div> */}
      </div>
      <Video />
    </div>
  );
};

export default Service;
