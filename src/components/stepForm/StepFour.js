import React from "react";
import "../../scss/stepForm/_step-four.scss";

export const StepFour = ({ navigation }) => {
  return (
    <section className="step-four">
      <p>Krok 4/4</p>
      <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
      <from className="form">
        <div className="main-section-form">
          <div className="address position">
            <h2>Adres odbioru:</h2>
            <label>
              <h3>Ulica</h3> <input type="text" />
            </label>
            <label>
              <h3>Miasto</h3> <input type="text" />
            </label>
            <label>
              <h3>Kod pocztowy</h3> <input type="number" />
            </label>
            <label>
              <h3>Numer telefonu</h3> <input type="number" />
            </label>
          </div>
          <div className="date position">
            <h2>Termin odbioru:</h2>
            <label>
              <h3>Data</h3>
              <input type="date" />
            </label>
            <label>
              <h3>Godzina</h3> <input />
            </label>
            <label>
              <h3>Uwagi dla kuriera</h3> <textarea type="text" />
            </label>
          </div>
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
            Dalej
          </button>
        </div>
      </from>
    </section>
  );
};
