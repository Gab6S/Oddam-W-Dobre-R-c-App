import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import decoration from "../assets/decoration.svg";
import "../scss/_signUp_signIn.scss";

import { auth } from "../firebase/firebase";

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

const style = {
  color: "red",
  fontWeight: "bold",
  fontSize: "12px",
  marginTop: "3px",
};

const LogIn = () => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onSubmit = (data, event) => {
    signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        setEmail("");
        setPassword("");
        history.push("/");
      })
      .catch((error) => {
        console.log("To chyba błąd", error);
      });

    event.preventDefault();
  };

  const signInWithEmailAndPassword = async (email, password) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("Error in signing in");
    }
  };

  // const handleOnChange = (e) => {
  //   console.log(e.target.name.value);
  //   if (e.target.name.value === email) {
  //     setEmail(e.target.value);
  //   }

  //   if (e.target.name.value === password) {
  //     setPassword(e.target.value);
  //   }
  // };
  const { register, handleSubmit, errors, watch } = methods;
  //const onSubmit = (data) => console.log(data);

  //console.log(errors, methods.getValues(), "dupa");

  return (
    <section className="log-in-container">
      <h1>Zaloguj się</h1>
      <img src={decoration} alt="decoration line"></img>
      <FormProvider {...methods}>
        <form className="form-layout" onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs-with-labels">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              name="email"
              value={email}
              ref={register}
              onChange={(e) => setEmail(e.target.value)}
            />

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
              value={password}
              ref={register}
              onChange={(e) => setPassword(e.target.value)}
            />

            {errors.password && (
              <p className="errorMsg" style={style}>
                {errors.password.message}
              </p>
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
      </FormProvider>
    </section>
  );
};

export default LogIn;
