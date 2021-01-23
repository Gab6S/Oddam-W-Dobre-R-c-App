import React from "react";
import "../../scss/stepForm/_step-one.scss";

export const StepOne = () => {
  return (
    <section className="step-one">
      <p>Krok 1/4</p>
      <h1>Zaznacz co chcesz oddać:</h1>
      <form className="checkboxes-list">
        <label>
          ubrania, które nadają się do ponownego użycia
          <input type="radio"></input>
          <span className="checkmark"></span>
        </label>
        <label>
          ubrania do wyrzucenia
          <input type="radio"></input>
          <span className="checkmark"></span>
        </label>
        <label>
          zabawki
          <input type="radio"></input>
          <span className="checkmark"></span>
        </label>
        <label>
          książki
          <input type="radio"></input>
          <span className="checkmark"></span>
        </label>
        <label>
          inne
          <input type="radio"></input>
          <span className="checkmark"></span>
        </label>
        <button type="submit">Dalej</button>
      </form>
    </section>
  );
};
