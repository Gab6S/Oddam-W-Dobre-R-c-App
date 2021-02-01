import React, { useState } from "react";
import "../../scss/stepForm/_step-one.scss";

import { useForm } from "react-hook-form";

export const StepOne = ({ formData, setForm, navigation }) => {
  const { item } = formData;

  const [selectedValue, setSelectedValue] = useState("");

  const { register, handleSubmit, errors, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  const onChange = (e) => {
    setSelectedValue(e.target.value);
    console.log(selectedValue);
  };

  return (
    <section className="step-one">
      <p>Krok 1/4</p>
      <h1>Zaznacz co chcesz oddać:</h1>
      <form className="checkboxes-list" onSubmit={handleSubmit(onSubmit)}>
        {item.map((el) => {
          return (
            <label>
              <input
                type="radio"
                value={el.text}
                key={el.id}
                checked={selectedValue === el.text}
                onChange={onChange}
                ref={register}
              />
              {el.text}
              <span className="checkmark"></span>
            </label>
          );
        })}

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
