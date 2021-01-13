import React, { useState } from "react";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

import decoration from "../assets/decoration.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import "../scss/_contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { register, errors, handleSubmit } = useForm();

  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };

  const postData = async () => {
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, email: email, message: message }),
    };

    try {
      const fetchResponse = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        settings
      );
      const data = await fetchResponse.json();
      return data;
    } catch (errors) {
      return errors;
    }
  };

  return (
    <Element name="contact">
      <section className="main-section-contact">
        <div className="contact-us-container">
          <h1>Skontaktuj się z nami</h1>
          <img src={decoration} alt="decoration line"></img>
          {/* <div style={{ color: "green", fontSize: "12px", fontWeight: "bold" }}>
            {Object.keys(status) &&
              "Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy."}
          </div> */}
          <form onSubmit={postData} className="form">
            <label for="name">Wpisz swoje imię</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Krzysztof"
              value={name}
              ref={register({ required: true, pattern: /^[A - Za - z]\s$/ })}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <div style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
              {/* {errors.name.length < 1 && "Podane imię jest nieprawidłowe!"} */}
            </div>
            <br />
            <label for="email">Wpisz swój email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="abc@xyz.pl"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/,
              })}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <div style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
              {/* {errors.email && "Podany email jest nieprawidłowy!"} */}
            </div>
            <br />
            <label for="msg">Wpisz swoją wiadomość</label>
            <br />
            <input
              type="text"
              id="msg"
              name="message"
              value={message}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ref={register({ require: true, minLength: 120 })}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <div style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
              {/* {Object.keys. < 120 && */}
              {/* "Wiadomość musi mieć conajmniej 120 znaków!"} */}
            </div>
            <button className="send-btn">Wyślij</button>
          </form>
        </div>
        <footer>
          <p>Copyright by Coders Lab</p>
          <img src={facebook} alt="facebook icon"></img>
          <img src={instagram} alt="instagram icon"></img>
        </footer>
      </section>
    </Element>
  );
};

export default Contact;
