import React from "react";
import NavbarNew from "../components/Navbar/NavbarNew";
import Footer from "../components/Footer";
import YoutubeEmbed from "../components/YoutubeEmbed";

const Story = () => {
  return (
    <div>
      {/* <NavbarNew /> */}
      <div className="container story-container">
        <div className="row header">
          <div className="col-12">
            <h1>Unsere Story</h1>
          </div>
        </div>
        <div className="row story-article">
          <p className="col-12">
            Hey Ihr, ich bin Felix. Ich bin leidenschaftlicher Musiker und stehe
            seit über 20 Jahren als Frontmann auf der Bühne. Gerne kümmere ich
            mich aber auch um alle Prozesse drum herum wie z.B. Künstler- &
            Eventmanagement, Booking, Entwicklung von Entertainment-Konzepten
            und einiges mehr. <br />
            <br />
            In 2020 bin ich auf die Idee mit dem STAGE BULLI gekommen und konnte
            diese mit Unterstützung von großartigen Menschen aus meinem Netzwerk
            umsetzen. Die Bulli-Einsatzmöglichkeiten sind so vielfältig und ich
            freue mich auf alles, was da noch kommt. Begleitet mich doch auf
            dieser Reise und lasst uns gemeinsam neue Kapitel schreiben.
          </p>
        </div>
        <YoutubeEmbed embedId="Wpli5-YRj6o" />
      </div>
      <Footer />
    </div>
  );
};

export default Story;
