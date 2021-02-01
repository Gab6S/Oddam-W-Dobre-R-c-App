import React, { useState } from "react";
import "../../scss/stepForm/_step-two.scss";
import { useForm } from "react-hook-form";

export const StepTwo = ({ formData, setForm, navigation }) => {
  const { bagsNumber } = formData;
  //const [selectedValue, setSelectedValue] = useState(bagsNumber);

  const { register } = useForm();
  //const onSubmit = (data) => console.log(data);
  const handleSubmit = (event) => {
    //console.log(selectedValue);
    event.preventDefault();
  };

  return (
    <section className="step-two">
      <p>Krok 2/4</p>
      <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
      <form className="select-list" onSubmit={handleSubmit}>
        <label>
          Liczba 60l worków:
          <select ref={register} value={bagsNumber} onChange={setForm}>
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
