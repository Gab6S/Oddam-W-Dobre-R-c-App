import React from "react";
import decoration from "../assets/decoration.svg";
import people from "../assets/people.jpg";
import signature from "../assets/signature.svg";
import "../scss/_about-us.scss";
import { Element } from "react-scroll";

const AboutUs = () => {
  return (
    <Element name="about-us">
      <section className="about-us-container">
        <div className="info-about">
          <div className="specify-info">
            <h1>O nas</h1>
            <img src={decoration} alt="decoration line"></img>
            <p>
              Nori grape silver beet broccoli kombu beet greens fava bean potato
              quandong celery. Bunya nuts black-eyed pea prairie turnip leek
              lentil turnip greens parsnip.
            </p>
            <img src={signature} alt="signature"></img>
          </div>
        </div>
        <img src={people} alt="group of people"></img>
      </section>
    </Element>
  );
};

export default AboutUs;
