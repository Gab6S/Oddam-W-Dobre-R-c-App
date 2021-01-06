import React from "react";
import decoration from "../assets/decoration.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const Contact = () => {
  return (
    <setion>
      <div>
        <h1>Skontaktuj się z nami</h1>
        <img src={decoration} alt="decoration line"></img>
        <form>
          <label for="name">Wpisz swoje imię</label>
          <br />
          <input type="text" id="name" name="name" />
          <br />
          <label for="email">Wpisz swój email</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <label for="msg">Wpisz swoją wiadomość</label>
          <br />
          <input type="text" id="msg" name="message" />
          <br />
          <div>Wyślij</div>
        </form>
        <footer>
          <p>Copyright by Coders Lab</p>
          <img src={facebook} alt="facebook icon"></img>
          <img src={instagram} alt="instagram icon"></img>
        </footer>
      </div>
    </setion>
  );
};

export default Contact;
