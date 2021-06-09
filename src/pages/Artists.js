import React, { useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import birddogs from "../images/birddogs.png";
import djs from "../images/djs.png";
import { BrowserRouter as NavLink } from "react-router-dom";

const Artists = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <main style={{ height: "100vh" }}>
        <div className="artists-container">
          <div className="header">
            <h1>Künstlervorschläge</h1>
          </div>
          <div className="article">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. sanctus est Lorem ipsum dolor sit amet. Lorem
              ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore.
            </p>
          </div>
          <div className="card-container">
            <div className="cards">
              <a href="https://www.birddogs-music.de/stagebulli" target="_blank">
                <div className="card-artists">
                  <img src={birddogs} alt="" />
                  <div className="desc-artists">
                    <h3>Birddogs</h3>
                    <p>Von den Beatles bis Coldplay</p>
                  </div>
                </div>
              </a>
              <a href="https://www.birddogs-music.de/event-dj" target="_blank">
              <div className="card-artists">
                <img src={djs} alt="" />
                <div className="desc-artists">
                  <h3>DJane / DJ</h3>
                  <p>Da bebt sogar der Bulli</p>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Artists;
