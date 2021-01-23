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
            <div className="item-number">1</div>
            <div className="item-text">wybierz rzeczy</div>
          </div>
          <div className="item">
            <p className="item-number">2</p>
            <p className="item-text">spakuj je w worki</p>
          </div>
          <div className="item">
            <div className="item-number">3</div>
            <div className="item-text">wybierz fundację</div>
          </div>
          <div className="item">
            <div className="item-number">4</div>
            <div className="item-text">zamów kuriera</div>
          </div>
        </div>
      </div>
    </section>
  );
};
