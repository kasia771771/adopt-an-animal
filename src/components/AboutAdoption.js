import React from "react";
import { Link } from "react-router-dom";

const AboutAdoption = () => {
  return (
    <section className="about-adoption">
      <div className="about-adoption__content container">
        <h2 className="title">Sprawdź czy jesteś gotowy na adopcje.</h2>
        <p className="paragraph">
          Pamiętaj że zwierzęta to nie zabawki. Przed adopcją zastanów się czy
          będziesz w stanie poświęcić pupilowi tyle czasu ile będzie tego
          potrzebował. Dowiedz się jak wygląda adopcja oraz jak się do niej
          przygotować.
        </p>
        <Link to="/" className="button__CTA">
          Dowiedz się!
        </Link>
      </div>
    </section>
  );
};

export default AboutAdoption;
