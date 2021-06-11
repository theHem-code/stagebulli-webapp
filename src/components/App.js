import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "../pages/Home";
import Artists from "../pages/Artists";
import Story from "../pages/Story";
import Impressions from "../pages/Impressions";
import Datenschutz from "../pages/Datenschutz";
import Impressum from "../pages/Impressum";
import NavbarNew from "./Navbar/NavbarNew"


const App = () => {
  return (
    <div>
      <NavbarNew />
    </div>
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route exact path="/kuenstlervorschlaege">
    //       <Artists />
    //     </Route>
    //     <Route exact path="/impressionen">
    //       <Impressions />
    //     </Route>
    //     <Route exact path="/unserestory">
    //       <Story />
    //     </Route>
    //     <Route exact path="/impressum">
    //       <Impressum />
    //     </Route>
    //     <Route exact path="/datenschutz">
    //       <Datenschutz />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;