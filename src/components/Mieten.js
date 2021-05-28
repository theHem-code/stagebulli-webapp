import React from "react";
import { Link } from "react-router-dom";

const Mieten = () => {
  return (
    <div id="mieten" style={{ height: "100vh", paddingTop: "100px" }}>
      <h1>Mieten</h1>
      <Link to="/impressionen">Externe Verlinkung: Impressionen</Link>
    </div>
  );
};

export default Mieten;
