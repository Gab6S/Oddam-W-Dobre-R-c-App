import React, { useState } from "react";
import "../../scss/stepForm/_step-three.scss";

export const StepThree = ({ formData, setForm, navigation }) => {
  const { needy } = formData;
  const [selected, setSelected] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = (e) => {
    // setIsChecked(e.target.checked);
    // setSelected([...selected, e.target.value]);
    // console.log(selected);
  };
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
            <input
              type="checkbox"
              name="needy"
              value="dzieciom"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <span className="single-checkbox">dzieciom</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="needy"
              value="samotnym matkom"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <span className="single-checkbox">samotnym matkom</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="needy"
              value="bezdomnym"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <span className="single-checkbox">bezdomnym</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="needy"
              value="niepełnosprawnym"
              checked={isChecked}
              onChange={handleOnChange}
            />
            <span className="single-checkbox">niepełnosprawnym</span>
          </label>
          <label>
            <input
              type="checkbox"
              name="needy"
              value="osobom starszym"
              checked={isChecked}
              onChange={handleOnChange}
            />
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
