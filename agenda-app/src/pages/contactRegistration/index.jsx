import React from "react";
import "./index.css";

import AvatarImage from "../../assets/images/avatar.png";
import { Input } from "../../components/input";

export const addContact = () => {
  return (
    <section className="addContact__section">
      <div className="addContact__container">
        <div className="addContact__form">
          <Input title="Nome" placeholder="Nome" type="text" />
          <Input title="Endereço" placeholder="Endereço" type="text" />
          <Input title="Telefone" placeholder="Telefone" type="text" />
          <Input title="E-mail" placeholder="E-mail" type="email" />
          <button className="addContact__button">Cadastrar</button>
        </div>
        <div className="addContact__content">
          <img src={AvatarImage} alt="avatar" className="addContact__image" />
        </div>
      </div>
    </section>
  );
};
