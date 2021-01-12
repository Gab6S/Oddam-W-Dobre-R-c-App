import React from "react";
import decoration from "../assets/decoration.svg";
import "../scss/_logout.scss";

const Logout = () => {
  return (
    <section className="log-out">
      <h1>
        Wylogowanie nastąpiło <br />
        pomyślnie
      </h1>
      <img src={decoration} alt="decoration line"></img>
      <button>Strona główna</button>
    </section>
  );
};

export default Logout;
