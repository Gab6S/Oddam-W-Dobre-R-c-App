import React from "react";
import "../../scss/stepForm/_step-four.scss";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const phoneRegExp = /\d{9}/;
const postCodeRegExp = /\d{2}-\d{3}/;
const timeRegExp = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;

const schema = yup.object().shape({
  street: yup.string().min(2).required(),
  city: yup.string().min(2).required(),
  //postCode: yup.number().matches(postCodeRegExp).required(),
  //phone: yup.number().matches(phoneRegExp).required(),
  date: yup.required(),
  //time: yup.matches(timeRegExp).required(),
  note: yup.string(),
});

export const StepFour = ({ navigation }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const { register, handleSubmit, errors, watch } = methods;
  const onSubmit = (data) => console.log(data);

  return (
    <section className="step-four">
      <p>Krok 4/4</p>
      <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
      <from className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="main-section-form">
          <div className="address position">
            <h2>Adres odbioru:</h2>
            <label>
              <h3>Ulica</h3> <input type="text" ref={register} />
            </label>
            <label>
              <h3>Miasto</h3> <input type="text" ref={register} />
            </label>
            <label>
              <h3>Kod pocztowy</h3> <input type="number" ref={register} />
            </label>
            <label>
              <h3>Numer telefonu</h3> <input type="text" ref={register} />
            </label>
          </div>
          <div className="date position">
            <h2>Termin odbioru:</h2>
            <label>
              <h3>Data</h3>
              <input type="date" ref={register} />
            </label>
            <label>
              <h3>Godzina</h3> <input ref={register} />
            </label>
            <label>
              <h3>Uwagi dla kuriera</h3> <textarea type="text" ref={register} />
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
