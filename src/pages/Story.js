import React, { useLayoutEffect } from "react";
import image from "../images/Story_Felix.jpg";
import birddogsLogo from "../images/Logo_Birddogs.png";
import hildebrandtLogo from "../images/Hildebrandt_Logo.png";
import YouTube from "react-youtube";

const Story = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div>
      <div className="container story-container">
        <div className="row header">
          <div className="col-12">
            <h1>Unsere Story</h1>
          </div>
        </div>
        <hr></hr>
        <div className="row story-article">
          <p className="col-12 col-lg-6">
            Hey Ihr, <br />
            <br />
            ich bin Felix. <br />
            <br />
            Ich bin leidenschaftlicher Musiker und stehe seit über 20 Jahren als
            Frontmann auf der Bühne. Gerne kümmere ich mich aber auch um alle
            Prozesse drum herum wie z.B. Künstler- & Eventmanagement, Booking,
            Entwicklung von Entertainment-Konzepten und einiges mehr. <br />
            <br />
            In 2020 bin ich auf die Idee mit dem STAGE BULLI gekommen und konnte
            diese mit Unterstützung von großartigen Menschen aus meinem Netzwerk
            umsetzen. Die Bulli-Einsatzmöglichkeiten sind so vielfältig und ich
            freue mich auf alles, was da noch kommt. Begleitet mich doch auf
            dieser Reise und lasst uns gemeinsam neue Kapitel schreiben.
          </p>
          <img src={image} alt="" className="col-12 col-lg-6 mt-5 story-img" />
        </div>
        <hr />
        <div className="row">
          <div className="col-12 video-wrapper">
            <YouTube videoId="Wpli5-YRj6o" className="story-video" />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="partner">
            <h2 className="col-12" style={{ textAlign: "center" }}>
              Unsere Partner
            </h2>
            <div className="row partner-logos">
              
                <a
                  href="https://www.birddogs-music.de/"
                  target="_blank"
                  rel="noreferrer"
                  className="col-12 col-lg-6 partner-logo"
                >
                  <img
                    src={birddogsLogo}
                    alt=""
                    className="col-12 col-lg-6 partner-logo"
                  />
                </a>
                <a
                  href="https://hildebrandt-veranstaltungstechnik.de/"
                  target="_blank"
                  rel="noreferrer"
                  className="col-12 col-lg-6 partner-logo"
                >
                  <img
                    src={hildebrandtLogo}
                    alt=""
                    className="col-12 col-lg-6 partner-logo"
                  />
                </a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
