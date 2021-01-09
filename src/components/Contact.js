import React from "react";
import decoration from "../assets/decoration.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import "../scss/_contact.scss";
import { Element } from "react-scroll";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  console.log(errors);

  const postData = async () => {
    const settings = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: {
      //   name,
      //   email,
      //   message,
      // },
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
      <section>
        <div className="contact-container"></div>
        <div className="contact-us-container">
          <h1>Skontaktuj się z nami</h1>
          <img src={decoration} alt="decoration line"></img>
          {/* <div style={{ color: "green", fontSize: "12px", fontWeight: "bold" }}>
            {Object.keys(status) &&
              "Wiadomość została wysłana! <br /> Wkrótce się skontaktujemy."}
          </div> */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <label for="name">Wpisz swoje imię</label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Krzysztof"
              ref={register({ required: true, pattern: /^[A - Za - z]\s$/ })}
            />
            <br />
            <div style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
              {errors.name.length < 1 && "Podane imię jest nieprawidłowe!"}
            </div>
            <br />
            <label for="email">Wpisz swój email</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="abc@xyz.pl"
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9._%+-]+@[A-Za-z0-9-]+[.][A-Za-z]{2,}$/,
              })}
            />
            <br />
            <div style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
              {errors.email && "Podany email jest nieprawidłowy!"}
            </div>
            <br />
            <label for="msg">Wpisz swoją wiadomość</label>
            <br />
            <input
              type="text"
              id="msg"
              name="message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              ref={register({ require: true, min: 120 })}
            />
            <br />
            <div style={{ color: "red", fontSize: "10px", fontWeight: "bold" }}>
              {errors.message.length < 120 &&
                "Wiadomość musi mieć conajmniej 120 znaków!"}
            </div>
            <button onClick={postData}>Wyślij</button>
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
