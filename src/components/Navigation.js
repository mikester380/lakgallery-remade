import { React } from "react";
import { Link } from "react-router-dom";

const Navigation = function ({ showMenu }) {
  return (
    <nav className={showMenu ? "nav nav--active" : "nav"}>
      <ul className="nav__links">
        <li className="nav__item">
          <Link to="/pieces" className="nav__link">
            Pieces
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/designers" className="nav__link">
            Designers
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/editorial" className="nav__link">
            Editorial
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
