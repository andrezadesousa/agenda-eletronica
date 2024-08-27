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
          <div className="home__table-header">
            <h1>Nome</h1>
            <h1>Endereço</h1>
            <h1>Telefone</h1>
            <h1>E-mail</h1>
          </div>
          <div className="home__table-body">
            <div className="home__table-contact">
              <h1>Raian Lot</h1>
              <h1>Av. Paulista</h1>
              <h1>(11) 99999-9999</h1>
              <h1>5oA0D@example.com</h1>
            </div>
            <div className="home__table-actions">
              <button className="delete__btn">
                <i className="ri-delete-bin-line delete"></i>
              </button>
              <button className="update__btn">
                <i className="ri-pencil-line update"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
