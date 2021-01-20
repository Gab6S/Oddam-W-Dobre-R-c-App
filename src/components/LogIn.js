import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import decoration from "../assets/decoration.svg";
import "../scss/_signUp_signIn.scss";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Podany email jest nieprawidłowy!")
    .required("Email jest wymagany!"),
  password: yup
    .string()
    .min(6, "Podane hasło jest za krótkie!")
    .required("Hasło jest wymagane!"),
});

const LogIn = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const onSubmit = (data) => console.log(data);

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  console.log(errors.email);

  return (
    <section className="log-in-container">
      <h1>Zaloguj się</h1>
      <img src={decoration} alt="decoration line"></img>

      <form className="form-layout" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-with-labels">
          <label for="email">Email</label>
          <input id="email" type="text" name="email" ref={register} />
          {errors.email ? emailInput.classList.toggle("red-line") : null}
          {errors.email && <p className="errorMsg">{errors.email.message}</p>}

          <label for="password">Hasło</label>
          <input id="password" type="password" name="password" ref={register} />
          {errors.password ? passwordInput.classList.toggle("red-line") : null}
          {errors.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
        </div>

        <div className="buttons">
          <button>
            <Link
              to="/rejestracja"
              style={{ textDecoration: "none", color: "black" }}
            >
              Załóż konto
            </Link>
          </button>
          <button type="submit">Zaloguj się</button>
        </div>
      </form>
    </section>
  );
};

export default LogIn;
