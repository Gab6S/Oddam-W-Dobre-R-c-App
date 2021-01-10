import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.svg";

const Register = () => {
  return (
    <section className="log-in-container">
      <h1>Załóż konto</h1>
      <img src={decoration} alt="decoration line"></img>
      <div className="form-sign-in">
        <form className="form-layout">
          <label for="email">Email</label>
          <input type="email" name="email"></input>
          <label for="password">Hasło</label>
          <input type="password" name="password"></input>
          <label for="password2">Powtórz hasło</label>
          <input type="password" name="repeatedPassword"></input>
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
        <button>Załóż konto</button>
      </div>
    </section>
  );
};

export default Register;
