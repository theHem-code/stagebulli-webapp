import React, { useLayoutEffect } from "react";
// import NavbarNew from "../components/Navbar/NavbarNew";
import birddogs from "../images/birddogs.png";
import djs from "../images/djs.png";

const Artists = () => {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });

  return (
    <div>
      <div className="container artists-container">
        <div className="row artist-header">
          <div className="col-12">
            <h1>Entertainmentvorschläge</h1>
          </div>
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
                <div className="artist-all">
                  <div className="desc-artists">
                    <h3>Birddogs</h3>

                    <p>
                      „Endlich mal eine sexy Coverband.“
                      <br />
                      Pop-, Rock-, Soul- und Disco-Songs aus sechs Jahrzehnten.
                      <br />
                      Von den Beatles bis Coldplay
                    </p>
                  </div>
                  <div className="line"></div>
                  <div className="artist-details">
                    <p>
                      <span
                        style={{
                          fontWeight: "800",
                          textTransform: "uppercase",
                        }}
                      >
                        Location:
                      </span>{" "}
                      Berlin
                    </p>
                    <p>
                      <span
                        style={{
                          fontWeight: "800",
                          textTransform: "uppercase",
                        }}
                      >
                        Budget:
                      </span>{" "}
                      ab 2.400€
                    </p>
                  </div>
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
                  <h3>DJ Plus Act</h3>
                  <p>Da bebt sogar der Bulli</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
