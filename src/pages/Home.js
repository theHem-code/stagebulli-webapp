import React from "react";
import Start from "../components/Start";
import Mieten from "../components/Mieten";
import Service from "../components/Service";
import Kontakt from "../components/Kontakt";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Start />
      <Mieten />
      <Service />
      <Kontakt />
      <Footer />
    </div>
  );
}

export default Home;
