import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header container">
      <div className="header__background" />
      <div className="header__content container">
        <h1 className="title">Razem raźniej</h1>
        <p className="paragraph">
          Twój przyjaciel już na Ciebie czeka! Nie kupuj, adoptuj.
        </p>
        <Link to="Adoptuj" className="button__CTA btn-adopt">
          Adoptuj!
        </Link>
      </div>
    </div>
  );
};

export default Header;
