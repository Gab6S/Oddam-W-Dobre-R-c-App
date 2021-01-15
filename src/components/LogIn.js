import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import decoration from "../assets/decoration.svg";
import "../scss/_logIn.scss";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6, "").required(),
});

const LogIn = () => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema,
  });
  const onSubmit = (data) => console.log(data);

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");

  return (
    <section className="log-in-container">
      <h1>Zaloguj się</h1>
      <img src={decoration} alt="decoration line"></img>
      <div className="form-sign-in">
        <form className="form-layout">
          <div className="email-input">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              ref={register({
                required: "Email is required.",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Podany email jest nieprawidłowy!",
                },
              })}
            />
            {errors.email ? emailInput.classList.toggle("red-line") : null}
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
          </div>
          <div className="password-input">
            {" "}
            <label for="password">Hasło</label>
            <input
              id="password"
              type="password"
              name="password"
              ref={register({
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Podane hasło jest za krótkie!",
                },
              })}
            />
            {errors.password
              ? passwordInput.classList.toggle("red-line")
              : null}
            {errors.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}
          </div>
        </form>
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
        <button onClick={handleSubmit(onSubmit)}>Zaloguj się</button>
      </div>
    </section>
  );
};

export default LogIn;
