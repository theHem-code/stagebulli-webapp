import React from "react";
import Start from "../components/Start";
import Mieten from "../components/Mieten";
import Service from "../components/Service";
import Kontakt from "../components/Kontakt";
// import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Start />
      <Mieten />
      <Service />
      <Kontakt />
    </div>
  );
}

export default Home;
