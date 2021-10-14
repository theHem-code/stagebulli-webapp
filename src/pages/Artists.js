import React, { useEffect, useState } from "react";
import birddogs from "../images/birddogs.png";
import djs from "../images/djs.png";
import bullioke from "../images/bullioke.png";

import ModalVideo from "react-modal-video";

const Artists = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="container artists-container">
        <div className="row artist-header">
          <div className="col-12">
            <h1>Entertainmentideen</h1>
          </div>
        </div>
        <hr></hr>

        <div className="row cards-artists">
          <div className="col-12 col-lg-4 notification">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="Oy1A_gHYSzQ"
              onClose={() => setOpen(false)}
            />
            <button className="btn-video" onClick={() => setOpen(true)}>
              WATCH VIDEO
              <div className="button-line-btn"></div>
            </button>
            <div className="card-artists">
              <img src={birddogs} alt="" />
              <div className="artist-all">
                <div className="desc-artists">
                  <h3>Birddogs</h3>

                  <p style={{ fontWeight: "300" }}>
                    <span style={{ fontWeight: "600" }}>
                      "Endlich mal eine sexy Coverband.“
                    </span>
                    <br />
                    <br />
                    Pop-, Rock-, Soul- und Disco-Songs aus sechs Jahrzehnten.
                    <br />
                    Von den Beatles bis Coldplay
                  </p>
                </div>
                <div className="line"></div>
                <div className="artist-details">
                  <p style={{ fontWeight: "600" }}>
                    <span
                      style={{
                        fontWeight: "300",
                        textTransform: "uppercase",
                      }}
                    >
                      Location:
                    </span>{" "}
                    Berlin
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    <span
                      style={{
                        fontWeight: "300",
                        textTransform: "uppercase",
                      }}
                    >
                      Budget:
                    </span>{" "}
                    ab 2.500€
                  </p>
                </div>
              </div>
            </div>
            {/* </a> */}
          </div>
          <div className="col-12 col-lg-4 notification">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="Oy1A_gHYSzQ"
              onClose={() => setOpen(false)}
            />
            <button className="btn-video" onClick={() => setOpen(true)}>
              WATCH VIDEO
              <div className="button-line-btn"></div>
            </button>
            <div className="card-artists">
              <img src={djs} alt="" />
              <div className="artist-all">
                <div className="desc-artists">
                  <h3>DJANE / DJ</h3>
                  <p style={{ fontWeight: "300" }}>
                    <span style={{ fontWeight: "600" }}>
                      "Put Your Hands Up In The Air!"
                    </span>
                    <br />
                    <br />
                    Stilvolle und genreübergreifende Profi-DJs.
                  </p>
                </div>
                <div className="line"></div>
                <div className="artist-details">
                  <p style={{ fontWeight: "600" }}>
                    <span
                      style={{
                        fontWeight: "300",
                        textTransform: "uppercase",
                      }}
                    >
                      Location:
                    </span>{" "}
                    deutschlandweit
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    <span
                      style={{
                        fontWeight: "300",
                        textTransform: "uppercase",
                      }}
                    >
                      Budget:
                    </span>{" "}
                    ab 800€
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 notification">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="Oy1A_gHYSzQ"
              onClose={() => setOpen(false)}
            />
            <button className="btn-video" onClick={() => setOpen(true)}>
              WATCH VIDEO
              <div className="button-line-btn"></div>
            </button>
            <div className="card-artists">
              <img src={bullioke} alt="" />
              <div className="artist-all">
                <div className="desc-artists">
                  <h3>BULLIOKE</h3>
                  <p style={{ fontWeight: "300" }}>
                    <span style={{ fontWeight: "600", paddingBottom: "20px" }}>
                      "Werde zum Rockstar <br />
                      auf der Bulli-Bühne!"
                    </span>
                    <br />
                    <br />
                    Singalong und Partystimmung mit Deinen Kollegen und
                    Freunden.
                    <br />
                    Unterstützt wirst Du von einem unser Karaoke-DJs und
                    professioneller Technik.
                  </p>
                </div>
                <div className="line"></div>
                <div className="artist-details">
                  <p style={{ fontWeight: "600" }}>
                    <span
                      style={{
                        fontWeight: "300",
                        textTransform: "uppercase",
                      }}
                    >
                      Location:
                    </span>{" "}
                    deutschlandweit
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    <span
                      style={{
                        fontWeight: "300",
                        textTransform: "uppercase",
                      }}
                    >
                      Budget:
                    </span>{" "}
                    ab 1.500€
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
