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
          ubrania, które nadają się do ponownego użycia
          <input
            type="radio"
            name={item}
            value="item1"
            checked={item === "item1"}
            onChange={setForm}
          />
          <span className="checkmark"></span>
        </label>
        <label>
          ubrania do wyrzucenia
          <input
            type="radio"
            name={item}
            value="item2"
            checked={item === "item2"}
            onChange={setForm}
          />
          <span className="checkmark"></span>
        </label>

        <label>
          zabawki
          <input
            type="radio"
            name={item}
            value="item3"
            checked={item === "item3"}
            onChange={setForm}
          />
          <span className="checkmark"></span>
        </label>
        <label>
          <input
            type="radio"
            name={item}
            value="item4"
            checked={item === "item4"}
            onChange={setForm}
          />
          <span className="checkmark" />
          książki
        </label>
        <label>
          <input
            type="radio"
            name={item}
            value="item5"
            checked={item === "item5"}
            onChange={setForm}
          />
          inne
          <span className="checkmark"></span>
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
