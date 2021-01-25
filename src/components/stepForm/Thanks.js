import React from "react";
import decoration from "../../assets/decoration.svg";
import "../../scss/stepForm/_thanks.scss";

export const Thanks = () => {
  return (
    <div className="thanks-container">
      <div className="thanks-text">
        <p>
          Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie
          informacje o odbiorze.
        </p>
        <img src={decoration} alt="decoration line" />
      </div>
    </div>
  );
};
