import React from "react";
import CareCards from "../components/CareCards";
import { Link } from "react-router-dom";

const Care = () => {
  return (
    <>
      <div className="care-header" />
      <div className="header-content">
        <h1 className="header-title">Znajdź opieke dla zwierzaka!</h1>
        <p className="header-paragraph">
          Wyślij formularz i znajdź opiekuna tymczasowego. Sam rownież możesz
          zostać opiekunem, odpowiedz na jedno z ogłoeszeń.{" "}
        </p>
        <Link className="button-CTA" to="znajdz-opieke">
          {" "}
          Znajdź opiekuna
        </Link>
      </div>

      <div className="care-cards-container">
        <CareCards />
      </div>
    </>
  );
};

export default Care;
