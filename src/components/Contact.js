import React from "react";
import decoration from "../assets/decoration.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import "../scss/_contact.scss";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <section>
        <div className="contact-container"></div>
        <div className="contact-us-container">
          <h1>Skontaktuj się z nami</h1>
          <img src={decoration} alt="decoration line"></img>
          <form>
            <label for="name">Wpisz swoje imię</label>
            <br />
            <input type="text" id="name" name="name" placeholder="Krzysztof" />
            <br />
            <label for="email">Wpisz swój email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@xyz.pl"
            />
            <br />
            <label for="msg">Wpisz swoją wiadomość</label>
            <br />
            <input
              type="text"
              id="msg"
              name="message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <br />
            <div>Wyślij</div>
          </form>
        </div>
      </section>
      <footer>
        <p>Copyright by Coders Lab</p>
        <img src={facebook} alt="facebook icon"></img>
        <img src={instagram} alt="instagram icon"></img>
      </footer>
    </Element>
  );
};

export default Contact;
