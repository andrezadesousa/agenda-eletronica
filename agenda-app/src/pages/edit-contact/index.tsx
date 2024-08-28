import React from "react";
import "./index.css";

import AvatarImage from "../../assets/images/boy-yellow-headphones.png";
import { Input } from "../../components/input";

import Favicon from "../../assets/icon/icon.svg";
import { Link } from "react-router-dom";
import { PinkButton } from "../../components/pinkButton";
import { Form } from "../../components/form";

export const EditContact = () => {
  return (
    <section className="editContact__section">
      <div className="editContact__header">
        <img src={Favicon} alt="logo" />
        <p>Editar contato</p>
        <Link to="/home" className="home__link">
          Vizualisar lista de contatos
        </Link>
        <Link to="/" className="home__link">
          Sair
        </Link>
      </div>
      <div className="editContact__container">
        <div className="editContact__content">
          <h1 className="editContact__title">Editando contato da lista?</h1>
          <p className="editContact__text">
            Ao finalizar, aproveite as vantagens de ter uma agenda eletrônica
          </p>
          <img src={AvatarImage} alt="avatar" className="editContact__image" />
        </div>
        <div className="editContact__form">
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
          <PinkButton title="Atualizar" onClick={() => {}} />
        </div>
      </div>
    </section>
  );
};
