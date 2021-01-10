import React from "react";
import { Link } from "react-router-dom";
import decoration from "../assets/decoration.svg";
import "../scss/_logIn.scss";

const LogIn = () => {
  return (
    <section className="log-in-container">
      <h1>Zaloguj się</h1>
      <img src={decoration} alt="decoration line"></img>
      <div className="form-sign-in">
        <form className="form-layout">
          <label for="email">Email</label>
          <input type="email" name="email"></input>
          <label for="password">Hasło</label>
          <input type="password" name="password"></input>
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
        <button>Zaloguj się</button>
      </div>
    </section>
  );
};

export default LogIn;
