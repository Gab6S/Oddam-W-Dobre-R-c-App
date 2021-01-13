import React from "react";
import "../scss/_basic.scss";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import WhoWeHelp from "./WhoWeHelp";
import {
  Switch,
  Route,
  BrowserRouter as Router,
  HashRouter,
} from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register";
import Navigation from "./Navigation";
import Logout from "./Logout";

const Home = () => {
  return (
    <div className="main-container">
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <HomeHeader />
            <HomeThreeColumns />
            <SimpleSteps />
            <AboutUs />
            <WhoWeHelp />
            <Contact />
          </Route>
          <Route path="/logowanie">
            <LogIn />
          </Route>
          <Route path="/rejestracja">
            <Register />
          </Route>
        </Switch>
      </Router>
      {/* <HashRouter>
        <Route path="/wylogowano"><Logout /></Route>
      </HashRouter> */}
    </div>
  );
};

export default Home;
