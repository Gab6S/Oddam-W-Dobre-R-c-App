import React, { useState } from "react";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import decoration from "../assets/decoration.svg";

import "../scss/_contact.scss";
import ContactFooter from "./ContactFooter";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup
    .string()
    .min(120, "Wiadomość musi mieć conajmniej 120 znaków!")
    .required(),
});

const Contact = () => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data) => console.log(data.errors);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const style = {
    color: "red",
    fontWeight: "bold",
    fontSize: "12px",
    marginTop: "3px",
  };

  const postData = (event) => {
    event.preventDefault();
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    };

    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", settings)
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <Element name="contact">
      <section className="main-section-contact">
        <div className="contact-us-container">
          <h1>Skontaktuj się z nami</h1>
          <img src={decoration} alt="decoration line"></img>

          <form
            className="form"
            onSubmit={handleSubmit(onSubmit)}
            onSubmit={postData}
          >
            <div className="two-first-inputs">
              <div className="input">
                <label for="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Krzysztof"
                  ref={register}
                />
                {errors.name && (
                  <p className="errorMsg" style="style">
                    {errors.name.message}
                  </p>
                )}
              </div>
              <div className="input">
                <label for="email">Wpisz swój email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="abc@xyz.pl"
                  ref={register}
                />
                {errors.email && (
                  <p className="errorMsg" style={style}>
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>
            <div className="input-msg">
              <label for="msg">Wpisz swoją wiadomość</label>
              <textarea
                type="text"
                id="msg"
                rows="4"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                ref={register}
              />
              {errors.message && (
                <p className="errorMsg" style={style}>
                  {errors.message.message}
                </p>
              )}
            </div>
            <button className="send-btn">Wyślij</button>
          </form>
        </div>
      </section>
      <ContactFooter />
    </Element>
  );
};

export default Contact;
