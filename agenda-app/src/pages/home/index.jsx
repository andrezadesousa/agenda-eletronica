import React from "react";

import "./index.css";

import Favicon from "../../assets/icon/icon.svg";
import { Link } from "react-router-dom";
import { Title } from "../../components/title";
export const Home = () => {
  return (
    <section className="home__section">
      <div className="home__container">
        <div className="home__header">
          <img src={Favicon} alt="logo" />
          <p>Sua agenda eletrônica</p>
          <Link to="/adding" className="home__link">
            Crie um novo contato
          </Link>
        </div>
        <div className="home__table">
          <h1 className="home__table-title">Agenda Eletrônica</h1>
          <div className="table__subtitle">
            <h1>Nome</h1>
            <h1>Endereço</h1>
            <h1>Telefone</h1>
            <h1>E-mail</h1>
          </div>
        </div>
      </div>
    </section>
  );
};
