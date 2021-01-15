import React, { useRef } from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6, "").required(),
  repeatedPassword: yup.string().min(6, "").required(),
});

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm({
    validationSchema: schema,
  });
  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data) => console.log(data);
  const style = {
    color: "red",
    fontWeight: "bold",
    fontSize: "12px",
    marginTop: "3px",
  };

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var repPasswordInput = document.getElementById("password2");

  return (
    <section className="log-in-container">
      <h1>Załóż konto</h1>
      <img src={decoration} alt="decoration line"></img>
      <div className="form-sign-in">
        <form className="form-layout">
          <label for="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            ref={register({
              required: "To pole jest wymagane!",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Podany email jest nieprawidłowy!",
              },
            })}
          />
          {errors.email ? emailInput.classList.toggle("red-line") : null}
          {errors.email && (
            <p className="errorMsg" style={style}>
              {errors.email.message}
            </p>
          )}
          <label for="password">Hasło</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={register({
              required: "To pole jest wymagane!",
              minLength: {
                value: 6,
                message: "Podane hasło jest za krótkie!",
              },
            })}
          />
          {errors.password ? passwordInput.classList.toggle("red-line") : null}
          {errors.password && (
            <p className="errorMsg" style={style}>
              {errors.password.message}
            </p>
          )}
          <label for="password2">Powtórz hasło</label>
          <input
            id="password2"
            type="password"
            name="repeatedPassword"
            ref={register({
              required: "To pole jest wymagane!",
              minLength: {
                value: 6 || "Podane hasło jest za krótkie!",
              },
              validate: (value) =>
                value === password.current || "Hasła nie są zgodne!",
            })}
          />
          {errors.repeatedPassword
            ? repPasswordInput.classList.toggle("red-line")
            : null}
          {errors.repeatedPassword &&
            errors.repeatedPassword.type === "validate" && (
              <p style={style}>{errors.repeatedPassword.message}</p>
            )}
          {errors.repeatedPassword &&
            errors.repeatedPassword.type === "minLength" && (
              <p style={style}>Podane hasło jest za krótkie!</p>
            )}
        </form>
      </div>
      <div className="buttons">
        <button>
          <Link
            to="/logowanie"
            style={{ textDecoration: "none", color: "black" }}
          >
            Zaloguj się
          </Link>
        </button>
        <button onClick={handleSubmit(onSubmit)}>Załóż konto</button>
      </div>
    </section>
  );
};

export default Register;
