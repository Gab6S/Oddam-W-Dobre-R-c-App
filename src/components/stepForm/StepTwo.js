import React from "react";
import "../../scss/stepForm/_step-two.scss";

export const StepTwo = ({ formData, setForm, navigation }) => {
  console.log(navigation);
  return (
    <section className="step-two">
      <p>Krok 2/4</p>
      <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
      <form className="select-list">
        <label>
          Liczba 60l worków:
          <select>
            <option value="0">--wybierz--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
        <div>
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
      </form>
    </section>
  );
};
