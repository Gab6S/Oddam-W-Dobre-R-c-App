import Recat from "react";
import { Link } from "react-router-dom";

const NavigationUp = () => {
  return (
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
  );
};

export default NavigationUp;
