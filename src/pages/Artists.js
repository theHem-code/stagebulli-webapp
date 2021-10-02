import React, { useEffect, useState } from "react";
import birddogs from "../images/birddogs.png";
import djs from "../images/djs.png";

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
          <div className="col-12 col-lg-6 notification">
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

                  <p style={{ fontWeight: "700" }}>
                    <span style={{ fontWeight: "500" }}>
                      „Endlich mal eine sexy Coverband.“
                    </span>
                    <br />
                    Pop-, Rock-, Soul- und Disco-Songs aus sechs Jahrzehnten.
                    <br />
                    Von den Beatles bis Coldplay
                  </p>
                </div>
                <div className="line"></div>
                <div className="artist-details">
                  <p style={{ fontWeight: "700" }}>
                    <span
                      style={{
                        fontWeight: "500",
                        textTransform: "uppercase",
                      }}
                    >
                      Location:
                    </span>{" "}
                    Berlin
                  </p>
                  <p style={{ fontWeight: "700" }}>
                    <span
                      style={{
                        fontWeight: "500",
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
            {/* </a> */}
          </div>
          <div className="col-12 col-lg-6 notification">
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
              <div className="desc-artists">
                <h3>DJ Plus Act</h3>
                <p>Da bebt sogar der Bulli</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
