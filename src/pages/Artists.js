import React, { useLayoutEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import birddogs from "../images/birddogs.png";
import djs from "../images/djs.png";

const Artists = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <Navbar />
      <div className="container artists-container">
        <div className="row header">
          <div className="col-12">
            <h1>Kunstlervorschlage</h1>
          </div>
        </div>
        <div className="row">
          <p className="col-12 article">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore.
          </p>
        </div>
        <div className="row cards-artists">
          <div className="col-12 col-lg-6">
            <a
              href="https://www.birddogs-music.de/stagebulli"
              target="_blank"
              rel="noreferrer"
            >
              <div className="card-artists">
                <img src={birddogs} alt="" />
                <div className="desc-artists">
                  <h3>Birddogs</h3>
                  <p>Von den Beatles bis Coldplay</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-12 col-lg-6">
            <a
              href="https://www.birddogs-music.de/event-dj"
              target="_blank"
              rel="noreferrer"
            >
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
      <Footer />
    </div>
  );
};

export default Artists;
