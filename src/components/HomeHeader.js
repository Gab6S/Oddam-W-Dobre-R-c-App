import React from "react";
import { Link } from "react-router-dom";
import "../scss/_home-header.scss";
import decoration from "../assets/decoration.svg";
import loadingBg from "../assets/loading-bg.jpg";

const HomeHeader = () => {
  return (
    <div className="loading-container">
      <img src={loadingBg} alt="box with items and radio"></img>
      <div className="loading-main">
        <div className="main-desktop">
          <h1>
            Zacznij pomagać!
            <br />
            Oddaj niechciane rzeczy w zaufane ręcę
          </h1>
          <img src={decoration} alt="decoration line"></img>
          <div className="select-action">
            <div>
              {" "}
              <Link
                to="/logowanie"
                style={{ textDecoration: "none", color: "black" }}
              >
                oddaj rzeczy
              </Link>
            </div>
            <div>
              {" "}
              <Link
                to="/logowanie"
                style={{ textDecoration: "none", color: "black" }}
              >
                zorganizuj zbiórkę
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
