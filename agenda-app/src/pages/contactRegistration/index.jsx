import React from "react";
import "./index.css";

import AvatarImage from "../../assets/images/avatar.png";
import { Input } from "../../components/input";

export const ContactRegistration = () => {
  return (
    <section className="register__section">
      <div className="register__container">
        <div className="register__form">
          <Input title="Nome" placeholder="Nome" type="text" />
          <Input title="Endereço" placeholder="Endereço" type="text" />
          <Input title="Telefone" placeholder="Telefone" type="text" />
          <Input title="E-mail" placeholder="E-mail" type="email" />
          <button className="register__button">Cadastrar</button>
        </div>
        <div className="register__content">
          <img src={AvatarImage} alt="avatar" className="register__image" />
        </div>
      </div>
    </section>
  );
};
