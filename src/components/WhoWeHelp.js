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

  const [current, setCurrent] = useState("aboutFundations");

  const fetchData = async () => {
    const result = await axios(`http://localhost:3005/${current}`);
    setData(result.data.fundations);
    setDesc(result.data.description);
  };

  useEffect(() => {
    setCurrentPage(1);
    fetchData();
  }, [current]);

  const indexOfLastCompany = (currentPage - 1) * companiesPerPage;
  const indexOfFirstCompany = indexOfLastCompany + companiesPerPage;
  const currentCompanies = data?.slice(indexOfLastCompany, indexOfFirstCompany);
  console.log(currentCompanies);
  const renderCompanies = currentCompanies?.map((el, index) => {
    return (
      <>
        (
        <div className="selecting-companies">
          <div className="company-details">
            <h2>Fundacja {el.name}</h2>
            <h3>Cel i misja: {el.mission}</h3>
            {currentCompanies.length >= index + 2 ? (
              <div className="straight-line"></div>
            ) : null}
          </div>
          <p>{el?.items?.map((el) => el + " ")}</p>
        </div>
        )
      </>
    );
  });

  const pages = Math.ceil(data.length / companiesPerPage);
  const renderPageNumbers =
    pages > 1 &&
    new Array(pages).fill(null).map((_, number) => {
      return (
        <>
          <li
            key={number}
            id={number + 1}
            onClick={(event) => {
              setCurrentPage(Number(event.target.id));
            }}
          >
            {number + 1}
          </li>
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
              <div onClick={() => setCurrent("aboutFundations")}>Fundacjom</div>
            </li>
            <li>
              <div onClick={() => setCurrent("aboutOrganizations")}>
                Organizacjom pozarządowym
              </div>
            </li>
            <li>
              <div onClick={() => setCurrent("aboutFundraising")}>
                Lokalnym zbiórkom
              </div>
            </li>
          </ul>
        </div>
        <div className="info-about-us">
          <p>{desc}</p>
        </div>
        <div>{renderCompanies}</div>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </section>
    </Element>
  );
};

export default WhoWeHelp;
