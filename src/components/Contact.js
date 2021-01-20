import React, { useState } from "react";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import decoration from "../assets/decoration.svg";

import "../scss/_contact.scss";
import ContactFooter from "./ContactFooter";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string().min(120, "").required(),
});

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });

  const onSubmit = (data) => console.log(data);

  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("msg");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const postData = async () => {
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: setName(nameInput.name.value),
        email: setEmail(emailInput.name.value),
        message: setMessage(messageInput.name.value),
      }),
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

          <form className="form">
            <div className="two-first-inputs">
              <div className="input">
                <label for="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Krzysztof"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[A - Za - z]\s$/,
                      message: "Podane imię jest nieprawidłowe!",
                    },
                  })}
                />
                {errors.name ? nameInput.classList.toggle("red-line") : null}
                {errors.name && (
                  <p className="errorMsg">{errors.name.message}</p>
                )}
              </div>
              <div className="input">
                <label for="email">Wpisz swój email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="abc@xyz.pl"
                  ref={register({
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/,
                      message: "Podany email jest nieprawidłowy!",
                    },
                  })}
                />{" "}
                {errors.email ? emailInput.classList.toggle("red-line") : null}
                {errors.email && (
                  <p className="errorMsg">{errors.email.message} </p>
                )}
              </div>
            </div>
            <div className="input-msg">
              <label for="msg">Wpisz swoją wiadomość</label>
              <input
                type="text"
                id="msg"
                name="message"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ref={register({
                  require: true,
                  minLength: {
                    value: 120,
                    message: "Wiadomość musi mieć conajmniej 120 znaków!",
                  },
                })}
              />
              {errors.message
                ? messageInput.classList.toggle("red-line")
                : null}
              {errors.message && (
                <p className="errorMsg">{errors.message.message}</p>
              )}
            </div>
            <button
              className="send-btn"
              onClick={handleSubmit(onSubmit)}
              onClick={postData}
            >
              Wyślij
            </button>
          </form>
        </div>
      </section>
      <ContactFooter />
    </Element>
  );
};

export default Contact;
