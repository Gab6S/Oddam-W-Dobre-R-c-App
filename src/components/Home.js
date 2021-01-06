import React from "react";
import "../scss/_basic.scss";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import HomeHeader from "./HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns";
import SimpleSteps from "./SimpleSteps";
import WhoWeHelp from "./WhoWeHelp";

const Home = () => {
  return (
    <div className="main-container">
      <HomeHeader />
      <HomeThreeColumns />
      <SimpleSteps />
      <AboutUs />
      <WhoWeHelp />
      <Contact />
    </div>
  );
};

export default Home;
