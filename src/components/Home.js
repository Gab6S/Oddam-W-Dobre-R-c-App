import React from "react";
import "../scss/_basic.scss";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import WhoWeHelp from "./WhoWeHelp";
import UserProvider from "../providers/UserProvider";
import { Switch, Route, HashRouter as Router } from "react-router-dom";
import LogIn from "./LogIn";
import Register from "./Register";
import Navigation from "./Navigation";
import Logout from "./Logout";
import { GiveItemsAway } from "./GiveItemsAway";

const Home = () => {
  return (
    <div className="main-container">
      <UserProvider>
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
            <Route path="/oddaj-rzeczy" component={GiveItemsAway} />
          </Switch>
        </Router>
        {/* <HashRouter>
        <Route path="/wylogowano"><Logout /></Route>
      </HashRouter> */}
      </UserProvider>
    </div>
  );
};

export default Home;
