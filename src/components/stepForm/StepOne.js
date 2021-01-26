import React from "react";
import "../../scss/stepForm/_step-one.scss";

export const StepOne = ({ formData, setForm, navigation }) => {
  const { item } = formData;
  return (
    <section className="step-one">
      <p>Krok 1/4</p>
      <h1>Zaznacz co chcesz oddać:</h1>
      <form className="checkboxes-list">
        <label>
          <input
            type="radio"
            name="choice"
            value={formData.item}
            onChange={setForm}
          ></input>
          <span className="checkmark"></span>
          ubrania, które nadają się do ponownego użycia
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value={formData.item}
            onChange={setForm}
          ></input>
          <span className="checkmark"></span>
          ubrania do wyrzucenia
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value={formData.item}
            onChange={setForm}
          ></input>
          <span className="checkmark"></span>
          zabawki
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value={formData.item}
            onChange={setForm}
          ></input>
          <span className="checkmark"></span>
          książki
        </label>
        <label>
          <input
            type="radio"
            name="choice"
            value={formData.item}
            onChange={setForm}
          ></input>
          <span className="checkmark"></span>
          inne
        </label>
        <button
          type="submit"
          className="submit"
          onClick={() => navigation.next()}
        >
          Dalej
        </button>
      </form>
    </section>
  );
};
