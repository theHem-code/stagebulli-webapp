import React, { useLayoutEffect } from "react";
import NavbarNew from "../components/Navbar/NavbarNew";
import Footer from "../components/Footer";
import YoutubeEmbed from "../components/YoutubeEmbed";
import image from "../images/Story_Felix.jpg";
import birddogsLogo from "../images/Logo_Birddogs.png";
import hildebrandtLogo from "../images/Hildebrandt_Logo.png";

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
          <div className="col-12">
            <YoutubeEmbed embedId="Wpli5-YRj6o" />
          </div>
          <hr />
          <div>
            <h2 style={{ textAlign: "center" }}>Unsere Partner</h2>
            <div className="partner-logos">
              <img
                src={birddogsLogo}
                alt=""
                className="col-12 col-md-6 partner-logo"
              />
              <img
                src={hildebrandtLogo}
                alt=""
                className="col-12 col-md-6 partner-logo"
              />
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Story;

