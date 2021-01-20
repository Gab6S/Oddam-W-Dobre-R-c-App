import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.svg";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { auth } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
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
  repeatedPassword: yup
    .string()
    .min(6, "Podane hasło jest za krótkie!")
    .required("Hasło jest wymagane"),
});

const Register = () => {
  const { register, handleSubmit, errors, watch } = useForm({
    validationSchema: schema,
  });
  const currentPassword = useRef({});
  const history = useHistory();
  currentPassword.current = watch("password", "");

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(
      data.email,
      data.password,
      data.repetedPassword
    );
    console.log(data.email);
  };
  const style = {
    color: "red",
    fontWeight: "bold",
    fontSize: "12px",
    marginTop: "3px",
  };

  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var repPasswordInput = document.getElementById("password2");

  const createUserWithEmailAndPassword = async (
    email,
    password,
    repetedPassword
  ) => {
    try {
      console.log(auth);
      const data = await auth.createUserWithEmailAndPassword(email, password);
      if (data?.user) history.push("/logowanie");
    } catch (error) {
      console.log("Error Signing up with email and password");
    }
  };

  return (
    <section className="log-in-container">
      <h1>Załóż konto</h1>
      <img src={decoration} alt="decoration line"></img>

      <form className="form-layout" onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs-with-labels">
          <label for="email">Email</label>
          <input id="email" type="text" name="email" ref={register} />
          {errors.email ? emailInput.classList.toggle("red-line") : null}
          {errors.email && (
            <p className="errorMsg" style={style}>
              {errors.email.message}
            </p>
          )}

          <label for="password">Hasło</label>
          <input id="password" type="password" name="password" ref={register} />
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
            ref={register}
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
          <button type="submit">Załóż konto</button>
        </div>
      </form>
    </section>
  );
};

export default Register;
