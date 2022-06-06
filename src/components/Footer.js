import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-rows container">
        <div className="footer-rows__first">
          <Link to="/" className="logotype">
            <i className="fa-solid fa-shield-dog logo" />
            <h2 className="type">adoptuj zwierzaka</h2>
          </Link>
          <ul className="navigation__list">
            <li className="item">
              <Link to="/opieka">Opieka</Link>
            </li>
            <li className="item">
              <Link to="/znajdz-dom">Znajdź dom</Link>
            </li>
            <li className="item">
              <Link to="/adoptuj">Adoptuj</Link>
            </li>
            <li className="item">
              <Link to="/czy-jestes-gotowy-na-adopcje">
                Czy jesteś gotowy na adopcje?
              </Link>
            </li>
            <li className="item">
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
        <div className="footer-rows__second">
          <a className="policy" target="_blank" href="/">
            Polityka prywatności
          </a>
          <ul className="social-media">
            <li className="social-media__parapgraph">Obserwuj losy pupili</li>
            <ul className="social-media__icons">
              <li>
                <a target="_blank" href="https://www.facebook.com/">
                  <i className="fa-brands fa-facebook-square" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/">
                  <i className="fa-brands fa-instagram-square" />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.twitter.com/">
                  <i className="fa-brands fa-twitter-square" />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
