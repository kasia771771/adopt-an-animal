import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about container">
      <div className="about__article">
        <img className="photo" src={require("../assets/article1.jpg")} />
        <div className="content">
          <h3 className="title">Opieka</h3>
          <p className="paragraph">
            Wyjeżdzasz na wakacje? A może musisz udać się na biznesowy wyjazd i
            nie możesz wziąć ze sobą swojego pupila? Wypełnij formularz i znajdź
            opiekuna na czas Twojej nieobecności!
          </p>
          <Link to="/Opieka" className="button__secondary">
            Wypełnij formularz <i className="fa-solid fa-chevron-right"></i>{" "}
          </Link>
        </div>
      </div>
      <div className="about__article column-reverse">
        <div className="content">
          <h3 className="title">Znajdź dom</h3>
          <p className="paragraph">
            Poszukujesz domu dla zwierzaka? Nasza strona poświęcona jest
            szukaniem domów dla zwierząt z całej Polski i nie tylko. Chętnie
            współpracujemy ze schroniskami. Wystarczy że zamieścisz ogłoszenie!
          </p>
          <Link to="/Znajdz-dom" className="button__secondary">
            Zamieść ogłoszenie <i className="fa-solid fa-chevron-right"></i>{" "}
          </Link>
        </div>
        <img className="photo" src={require("../assets/article2.jpg")} />
      </div>
      <div className="about__article">
        <img className="photo" src={require("../assets/article3.jpg")} />
        <div className="content">
          <h3 className="title">Adopcja</h3>
          <p className="paragraph">
            Doskwiera Ci samotność, szukasz przyjaciela na całe życie? Zobacz
            oferty adopcji na naszym portalu. Znajdziesz tam aż kilka kategorii
            zwierząt które szukają domu!
          </p>
          <Link to="/adoptuj" className="button__secondary">
            Sprawdź adopcje <i className="fa-solid fa-chevron-right" />{" "}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
