import React from "react";
import "./index.css";

import AvatarImage from "../../assets/images/boy-white-headphones.png";
import { Input } from "../../components/input";

import Favicon from "../../assets/icon/icon.svg";
import { Link } from "react-router-dom";
import { PinkButton } from "../../components/pinkButton";
import { Form } from "../../components/form";

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
          <Form id="form-contact">
            <Input
              title="Nome"
              placeholder="Nome do contato"
              type="text"
              icon="ri-user-line"
              id="name"
            />
            <Input
              title="Endereço"
              placeholder="Av Paulista"
              type="text"
              icon="ri-map-pin-line"
              id="address"
            />
            <Input
              title="Telefone"
              placeholder="11 99999-9999"
              type="text"
              icon="ri-phone-line"
              id="phone"
            />
            <Input
              title="E-mail"
              placeholder="email@gmail.com"
              type="email"
              icon="ri-mail-line"
              id="email"
            />
          </Form>
          <PinkButton title="Cadastrar" onClick={() => {}} />
        </div>
        <div className="addContact__content">
          <h1 className="addContact__title">Cadastrando um novo contato?</h1>
          <p className="addContact__text">
            Depois, aproveite as vantagens de ter uma agenda eletrônica!
          </p>
          <img src={AvatarImage} alt="avatar" className="addContact__image" />
        </div>
      </div>
    </section>
  );
};
