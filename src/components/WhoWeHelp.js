import React, { useState, useEffect } from "react";
import axios from "axios";
import decoration from "../assets/decoration.svg";
import "../scss/_who-we-help.scss";
import { Element } from "react-scroll";

const WhoWeHelp = () => {
  const [data, setData] = useState([]);
  const [desc, setDesc] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [companiesPerPage, setCompaniesPerPage] = useState(3);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3005/aboutFundations");
      setData(result.data.fundations);
      setDesc(result.data.description);
    };

    fetchData();
  }, []);

  const indexOfLastCompany = currentPage * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany - companiesPerPage;
  const currentCompanies = data.slice(indexOfFirstCompany, indexOfLastCompany);

  const renderCompanies = currentCompanies.map((el, index) => {
    return (
      <>
        {" "}
        {visible && (
          <div className="selecting-companies">
            <div className="company-details">
              <h2>Fundacja {el.name}</h2>
              <h3>Cel i misja: {el.mission}</h3>
              <div className="straight-line"></div>
            </div>
            <p>{el.items.map((el) => el + " ")}</p>
          </div>
        )}
      </>
    );
  });

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(data.length / companiesPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <>
        {" "}
        {visible && (
          <li
            key={number}
            id={number}
            onClick={(event) => {
              setCurrentPage(Number(event.target.id));
            }}
          >
            {number}
          </li>
        )}
      </>
    );
  });

  return (
    <Element name="organizations">
      <section className="organizations-container">
        <div className="who-we-help">
          <h1>Komu pomagamy?</h1>
          <img src={decoration} alt="decoration line"></img>
          <ul>
            <li>
              <div onClick={() => setVisible(!visible)}>Fundacjom</div>
            </li>
            <li>
              <div>Organizacjom pozarządowym</div>
            </li>
            <li>
              <div>Lokalnym zbiórkom</div>
            </li>
          </ul>
        </div>
        <div className="info-about-us"> {visible && <p>{desc}</p>}</div>
        <div>
          {renderCompanies}
          {/* <div className="straight-line"></div> */}
        </div>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </section>
    </Element>
  );
};

export default WhoWeHelp;
