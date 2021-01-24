import React from "react";
import Navigation from "./Navigation";
import decoration from "../assets/decoration.svg";
import "../scss/_intro-give-away.scss";

export const IntroGiveAway = () => {
  return (
    <section className="intro-cont">
      <div className="bg-img"></div>
      <div className="right-side-intro">
        <h1>
          Oddaj rzeczy, których już nie chcesz <span>potrzebującym</span>
        </h1>
        <img src={decoration} alt="decoration line"></img>
        <h2>Wystarczą 4 proste kroki</h2>
        <div className="squareSteps">
          <div className="item">
            <div className="item-number item-text">
              1 <br />
              <span>wybierz rzeczy</span>
            </div>
          </div>
          <div className="item">
            <div className="item-number item-text">
              2 <br />
              <span>spakuj je w worki</span>
            </div>
          </div>
          <div className="item">
            <div className="item-number item-text">
              3 <br />
              <span>wybierz fundację</span>
            </div>
          </div>
          <div className="item">
            <div className="item-number item-text">
              4 <br />
              <span>zamów kuriera</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
