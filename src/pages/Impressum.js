import React from "react";

const Impressum = () => {

  return (
    <div>
      <div className="container">
        <div className="row section">
          <h4>IMPRESSUM</h4>
        </div>
        <hr></hr>
        <div className="row details mt-5">
          <h3>
            BIRDDOGS GBR <br />
            FRANKE & HEMSING <br />
            MARTIN-BUBER-STR. 25 <br />
            14163 BERLIN
          </h3>
          <br />
          <br />
          <p>
            <a href="mailto:mail@stagebulli.de">mail@stagebulli.de</a>
            <br />
            <a href="https://www.stagebulli.de/">www.stagebulli.de</a>
          </p>
          <p>
            Für diese Internetpräsenz verantwortlich: <br />
            Felix Franke, Berlin <br/>
            Peter Hemsing, Berlin
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
        <div className="row mt-5 mb-3">
          <h3>MEDIA CREDITS:</h3>
        </div>
        <div className="row mb-5">
          <p>
           <span>Photos by</span> Alexander Mundt, David Ziems, Marko Dietrich, Dominik Wilzok, Marc Vorwerk & Markus Werner
          </p>
          <p>
          <span>Video by</span> Alexander Mundt
          </p>
          <p>
          <span>Stage Bulli</span> Logo designed by Ojala Werke.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
