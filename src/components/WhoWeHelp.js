import React, { useState, useEffect } from "react";
import axios from "axios";
import decoration from "../assets/decoration.svg";
import "../scss/_who-we-help.scss";
import Organizations from "./Organizations";

const WhoWeHelp = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3005/fundations");
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <section className="organizations-container">
      <div className="who-we-help">
        <h1>Komu pomagamy?</h1>
        <img src={decoration} alt="decoration line"></img>
        <ul>
          <li>
            <div>Fundacjom</div>
          </li>
          <li>
            <div>Organizacjom pozarządowym</div>
          </li>
          <li>
            <div>Lokalnym zbiórkom</div>
          </li>
        </ul>
      </div>
      <div className="info-about-us">
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
      </div>
      <div>
        {data.map((el) => {
          return (
            <>
              <div className="selecting-companies">
                <div className="company-details">
                  <h2>Fundacja {el.name}</h2>
                  <h3>Cel i misja: {el.mission}</h3>
                </div>

                <p>{el.items.map((el) => el + " ")}</p>
              </div>
              <div className="straight-line"></div>
            </>
          );
        })}
      </div>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </section>
  );
};

export default WhoWeHelp;
