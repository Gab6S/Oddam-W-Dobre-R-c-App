import React from "react";
import tShirt from "../../assets/t-shirt.svg";
import loading from "../../assets/loading.svg";
import "../../scss/stepForm/_summary.scss";

export const Summary = ({ navigation }) => {
  return (
    <section className="summary-step">
      <h1>Podsumowanie Twojej darowizny</h1>
      <h2>Oddajesz:</h2>
      <ul>
        <li>
          <img src={tShirt} alt="t-shirt icon" />
          liczba worków, co i komu
        </li>
        <li>
          <img src={loading} alt="loading icon" />
          dla lokalizacji: ...
        </li>
      </ul>
      <div className="main-section-form">
        <div>Adres odbioru:</div>
        <div>Termin odbioru:</div>
      </div>
      <div className="btns">
        <button
          type="submit"
          className="submit"
          onClick={() => navigation.previous()}
        >
          Wstecz
        </button>
        <button
          type="submit"
          className="submit"
          onClick={() => navigation.next()}
        >
          Potwierdzam
        </button>
      </div>
    </section>
  );
};
