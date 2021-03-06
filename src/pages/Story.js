import React from "react";
import image from "../images/Story_Felix.jpg";
import bullistory from "../images/bullistory.jpg"
import birddogsLogo from "../images/Logo_Birddogs.png";
import hildebrandtLogo from "../images/Hildebrandt_Logo.png";
import ojalaLogo from "../images/Ojala_Logo.png";
import YouTube from "react-youtube";

const Story = () => {

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
          <img src={image} alt="" className="col-12 col-lg-6 my-5 story-img" />
        </div>
        <hr />
        <div className="row">
          <div className="col-12 video-wrapper">
            <YouTube videoId="Wpli5-YRj6o" className="story-video" />
          </div>
        </div>
        <hr />
        <div className="row story-article">
          <img src={bullistory} alt="" className="col-12 col-lg-6 my-5 story-img" />
          <p className="col-12 col-lg-6">
            Moin zusammen, <br />
            <br />
            ich bin der Stage Bulli aka Bond Bulli :-) <br />
            <br />
            1979 als einer der letzten T2 Breitpritschen in Hannover vom Band
            gelaufen und nach Südafrika verschifft. Dort haben sich Sonne und
            Good Vibes tief in meine DNA eingebrannt bis es dann vor circa 10
            Jahren wieder zurück nach Deutschland ging.
            <br />
            <br />
            Hier war ich unter anderem als Filmauto im Einsatz, mein größter Erfolg war das
            Mitwirken beim letzten James Bond Film „Keine Zeit zu Sterben“. 2020
            ging es dann vom schönen Bayern nach Berlin, wo ich nun endlich
            meine wahre Bestimmung gefunden habe ;-)
          </p>
        </div>
        <hr />
        <div className="row">
          <div className="partner">
            <h2 className="col-12" style={{ textAlign: "center" }}>
              Partner In Crime
            </h2>
            <div className="row partner-logos">
              <a
                href="https://www.birddogs-music.de/"
                target="_blank"
                rel="noreferrer"
                className="col-12 col-lg-4 partner-logo"
              >
                <img
                  src={birddogsLogo}
                  alt=""
                  className="col-12 col-lg-4 partner-logo"
                />
              </a>
              <a
                href="https://hildebrandt-veranstaltungstechnik.de/"
                target="_blank"
                rel="noreferrer"
                className="col-12 col-lg-4 partner-logo"
              >
                <img
                  src={hildebrandtLogo}
                  alt=""
                  className="col-12 col-lg-4 partner-logo"
                />
              </a>
              <a
                href="https://ojala.de"
                target="_blank"
                rel="noreferrer"
                className="col-12 col-lg-4 partner-logo"
              >
                <img
                  src={ojalaLogo}
                  alt=""
                  className="col-12 col-lg-4 partner-logo"
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
