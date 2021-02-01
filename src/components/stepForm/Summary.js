import React from "react";
import tShirt from "../../assets/t-shirt.svg";
import loading from "../../assets/loading.svg";
import "../../scss/stepForm/_summary.scss";

export const Summary = ({ formData, navigation }) => {
  const {
    item,
    bagsNumber,
    location,
    needy,
    organizationName,
    street,
    city,
    postCode,
    phone,
    date,
    time,
    note,
  } = formData;

  const people = needy.map((el) => {
    return el;
  });

  return (
    <section className="summary-step">
      <h1>Podsumowanie Twojej darowizny</h1>
      <h2>Oddajesz:</h2>
      <ul className="summary-list">
        <li>
          <img src={tShirt} alt="t-shirt icon" />
          {bagsNumber} worków, {item}, {people}
        </li>
        <li>
          <img src={loading} alt="loading icon" />
          dla lokalizacji: {location}
        </li>
      </ul>
      <div className="main-section-form">
        <div className="pick-up-address">
          <table>
            <th>Adres odbioru:</th>
            <tr>
              <td>Ulica</td>
              <td>{street}</td>
            </tr>
            <tr>
              <td>Miasto</td>
              <td>{city}</td>
            </tr>
            <tr>
              <td>Kod pocztowy</td>
              <td>{postCode}</td>
            </tr>
            <tr>
              <td>Numer Telefonu</td>
              <td>{phone}</td>
            </tr>
          </table>
        </div>
        <div className="pick-up-date">
          <table>
            <th>Termin odbioru:</th>
            <tr>
              <td>Data</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td>Godzina</td>
              <td>{time}</td>
            </tr>
            <tr>
              <td>Uwagi dla kuriera</td>
              <td>{note}</td>
            </tr>
          </table>
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
          Potwierdzam
        </button>
      </div>
    </section>
  );
};
