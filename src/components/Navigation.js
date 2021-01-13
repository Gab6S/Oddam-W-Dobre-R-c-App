import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";

const Navigation = () => {
  return (
    <header>
      <div className="main-bg"></div>
      <nav className="menu">
        <ul className="menu-up">
          <li>
            <Link
              to="/logowanie"
              style={{ textDecoration: "none", color: "black" }}
            >
              Zaloguj
            </Link>
          </li>
          <li>
            <Link
              to="/rejestracja"
              style={{ textDecoration: "none", color: "black" }}
            >
              Załóż konto
            </Link>
          </li>
        </ul>
        <ul className="menu-down">
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Start{" "}
            </Link>
          </li>
          <li>
            <LinkScroll
              to="simple-steps"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              O co chodzi?
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="about-us"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              O nas
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="organizations"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Fundacja i organizacje
            </LinkScroll>
          </li>
          <li>
            <LinkScroll
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Kontakt
            </LinkScroll>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
