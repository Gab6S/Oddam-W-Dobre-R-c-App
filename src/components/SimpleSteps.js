import React from "react";
import decoration from "../assets/decoration.svg";
import tShirt from "../assets/t-shirt.svg";
import bag from "../assets/bag.svg";
import loupe from "../assets/loupe.svg";
import loading from "../assets/loading.svg";
import "../scss/_simple-steps.scss";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";

const SimpleSteps = () => {
  return (
    <Element name="simple-steps">
      <section className="four-steps-container">
        <h1>Wystarczą 4 proste kroki</h1>
        <img src={decoration} alt="decoration line"></img>
        <div className="select-icons">
          <ul className="column">
            <img src={tShirt} alt="t-shirt"></img>
            <li>Wybierz rzeczy</li>
            <li></li>
            <li>ubrania, zabawki, sprzęt i inne</li>
          </ul>
          <ul className="column">
            <img src={bag} alt="bag"></img>

            <li>Spakuj je</li>
            <li></li>
            <li>skorzystaj z worków na śmieci</li>
          </ul>
          <ul className="column">
            <img src={loupe} alt="loupe"></img>

            <li>Zdecyduj komu chcesz pomóc</li>
            <li></li>
            <li>wybierz zaufane miejsce</li>
          </ul>
          <ul className="column">
            <img src={loading} alt="loading"></img>

            <li>Zamów kuriera</li>
            <li></li>
            <li>kurier przyjedzie w dogodnym terminie</li>
          </ul>
        </div>
        <div className="give-items-away">
          {" "}
          <Link
            to="/logowanie"
            style={{ textDecoration: "none", color: "black" }}
          >
            Oddaj rzeczy
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default SimpleSteps;
