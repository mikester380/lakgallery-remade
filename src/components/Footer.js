import React, { useContext } from "react";
import { CurrContext } from "../context/CurrContext";

const Footer = () => {
  const { setCurrency } = useContext(CurrContext);

  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__about">
          <p className="footer__heading">About</p>
          <ul className="footer__links">
            <li className="footer__link">
              <a href="/pieces">Pieces</a>
            </li>
            <li className="footer__link">
              <a href="/pieces">Designers</a>
            </li>
            <li className="footer__link">
              <a href="/pieces">About</a>
            </li>
            <li className="footer__link">
              <a href="/pieces">Editorial</a>
            </li>
            <li className="footer__link">
              <a href="/pieces">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__contact">
          <p className="footer__heading">Contact</p>
          <ul className="footer__links">
            <li className="footer__link">
              <a href="mailto:info@lakgallery.com">info@lakgallery.com</a>
            </li>
            <li className="footer__link footer__link--social">
              <a href="https://www.instagram.com/lakgallery_">Instagram</a>
            </li>
            <li className="footer__link footer__link--social">
              <a href="https://www.pinterest.com">Pinterest</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__right">
        <form>
          <label htmlFor="email" className="footer__heading">
            Join our newsletter
          </label>
          <input
            type="email"
            className="footer__email"
            id="email"
            placeholder="Your email"
          ></input>
        </form>
      </div>
      <div className="footer__bottom">
        <select
          className="footer__currency"
          onChange={(e) => {
            setCurrency(e.target.value);
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="AUD">AUD</option>
          <option value="CAD">CAD</option>
          <option value="GBP">GBP</option>
        </select>

        <div className="footer__legals">
          <a href="/terms" className="footer__legal footer__legal-link">
            Terms & Conditions
          </a>
          <a href="/privacy" className="footer__legal footer__legal-link">
            Privacy Policy
          </a>
          <a href="/developer" className="footer__legal footer__legal-link">
            <span>Originally Developed by Tinloof &mdash;</span>
            <br />
            <span>Cloned by Mikestaarr</span>
          </a>
          <p className="footer__legal">&copy; Lak Gallery 2022</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
