import React, { useRef } from "react";
import { Link } from "react-router-dom";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import decoration from "../assets/decoration.svg";
import "../scss/_signUp_signIn.scss";

import { auth } from "../firebase/firebase";
import { useHistory } from "react-router-dom";

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
    .required("Hasło jest wymagane")
    .oneOf([yup.ref("password"), null], "Hasła muszą się zgadzać!"),
});

const Register = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { register, handleSubmit, errors, watch } = methods;
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
          {errors.email && (
            <p className="errorMsg" style={style}>
              {errors.email.message}
            </p>
          )}

          <label for="password">Hasło</label>
          <input id="password" type="password" name="password" ref={register} />

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

          {errors.repeatedPassword && (
            <p style={style}>{errors.repeatedPassword.message}</p>
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
