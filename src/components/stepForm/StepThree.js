import React from "react";
import "../../scss/stepForm/_step-three.scss";

export const StepThree = ({ formData, setForm, navigation }) => {
  return (
    <section className="step-three">
      <p>Krok 3/4</p>
      <form className="select-localization">
        <h1>Lokalizacja:</h1>
        <select>
          <option value="0">--wybierz--</option>
          <option value="1">Poznań</option>
          <option value="2">Warszawa</option>
          <option value="3">Kraków</option>
          <option value="4">Wrocław</option>
          <option value="5">Katowice</option>
        </select>
        <h2>Komu chcesz pomóc?</h2>
        <div className="who-we-help">
          <label>
            <input type="checkbox" name="how_we_help" value="children" />
            <span className="single-checkbox">dzieciom</span>
          </label>
          <label>
            <input type="checkbox" name="how_we_help" value="mothers" />
            <span className="single-checkbox">samotnym matkom</span>
          </label>
          <label>
            <input type="checkbox" name="how_we_help" value="homeless" />
            <span className="single-checkbox">bezdomnym</span>
          </label>
          <label>
            <input type="checkbox" name="how_we_help" value="disabled" />
            <span className="single-checkbox">niepełnosprawnym</span>
          </label>
          <label>
            <input type="checkbox" name="how_we_help" value="elderly" />
            <span className="single-checkbox">osobom starszym</span>
          </label>
        </div>
        <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
        <input type="text" name="organization" value="" />
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
      </form>
    </section>
  );
};
