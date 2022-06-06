import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <section className="help container">
      <div className="help__count">
        <h2 className="title">
          Do tej pory aż {345} zwierzaków znalazło swój wymarzony DOM!
        </h2>
        <h3 className="sub-title">
          Chcesz przekazać darowizne na wybrane przez siebie schronisko?
        </h3>
        <p className="paragraph">
          A może chcesz ofriarować ackesoria dla zwierząt? Wspieramy zbiórki na
          terenie całej Polski. Mile widzane są między innymi rzeczy typu:
          legowiska, zabawki, klatki a przede wszystkim pokarm dla zwierząt.
        </p>
        <Link to="/Help" className="button__secondary">
          Pomóż zwierzakom <i className="fa-solid fa-chevron-right"></i>
        </Link>
      </div>
      <div className="help__photos">
        <img
          className="wide single-photo"
          src={require("../assets/photo-wide.jpg")}
        />
        <img
          className="narrow single-photo"
          src={require("../assets/photo-narrow.jpg")}
        />
        <img
          className="square single-photo"
          src={require("../assets/photo-square.jpg")}
        />
      </div>
    </section>
  );
};

export default Help;
