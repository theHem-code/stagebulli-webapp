import React from "react";
import NavbarNew from "../components/Navbar/NavbarNew";

const Impressum = () => {
  return (
    <div>
      <NavbarNew />
      <div className="container">
        <div className="row section">
          <h4>IMPRESSUM</h4>
        </div>
        <hr></hr>
        <div className="row details mt-5">
          <h3>
            BIRDDOGS GBR <br />
            GORMANNSTR. 14 <br />
            10119 BERLIN
          </h3>
          <br />
          <br />
          <p>
            <a href="mailto:mail@birddogs-music.de">mail@birddogs-music.de</a>
            <br />
            <a href="https://www.birddogs-music.de/">www.birddogs-music.de</a>
          </p>
          <p>
            Für diese Internetpräsenz verantwortlich: <br />
            Felix Franke, Berlin Peter Hemsing, Berlin
          </p>
        </div>
        <div className="row mt-5 mb-3">
          <h3>HAFTUNGSHINWEIS:</h3>
        </div>
        <div className="row mb-5">
          <p>
            Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
            Haftung für die Inhalte externer Links. Für den Inhalt der
            verlinkten Seiten sind ausschließlich deren Betreiber
            verantwortlich. Für Schäden, die sich aus der Nutzung oder
            Nichtnutzung dieser Website ergeben, wird in keinem Fall eine
            Haftung übernommen. Urheberrechtshinweis: Alle Inhalte und
            Strukturen dieser Website sind urheber- und leistungsschutzrechtlich
            geschützt. Die Veröffentlichung im WorldWideWeb oder in sonstigen
            Diensten des Internet bedeutet noch keine Einverständniserklärung
            für eine anderweitige Nutzung durch Dritte. Wir erlauben und
            begrüßen ausdrücklich das Zitieren unserer Dokumente sowie das
            Setzen von Links auf unsere Website, solange kenntlich gemacht wird,
            dass es sich um Inhalte der Website von unserer Website handelt und
            diese Inhalte nicht in Verbindung mit Inhalten Dritter gebracht
            werden, die unseren Interessen widersprechen.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;

