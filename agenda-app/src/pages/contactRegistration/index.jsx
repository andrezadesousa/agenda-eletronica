import React from "react";
import "./index.css";
import VideoHome from "../../assets/videos/loginVideo.mp4";

import AvatarImage from "../../assets/images/avatar.png";
import { Input } from "../../components/input";

import Favicon from "../../assets/icon/icon.svg";
import { Link } from "react-router-dom";

export const AddContact = () => {
  return (
    <section className="addContact__section">
      <div className="addContact__header">
        <img src={Favicon} alt="logo" />
        <p>Cadastrar um novo contato</p>
        <Link to="/home" className="home__link">
          Vizualisar lista de contatos
        </Link>
        <Link to="/" className="home__link">
          Sair
        </Link>
      </div>
      <div className="addContact__container">
        <div className="addContact__form">
          <Input title="Nome" placeholder="Nome" type="text" />
          <Input title="Endereço" placeholder="Endereço" type="text" />
          <Input title="Telefone" placeholder="Telefone" type="text" />
          <Input title="E-mail" placeholder="E-mail" type="email" />
          <button className="login__button">Cadastrar</button>
        </div>
        <div className="addContact__content">
          <h1 className="addContact__title">Cadastrando um novo contato</h1>
          <p className="addContact__text">
            E aproveite as vantagens de ter uma agenda eletrônica
          </p>
          <img src={AvatarImage} alt="avatar" className="addContact__image" />
        </div>
      </div>
    </section>
  );
};
