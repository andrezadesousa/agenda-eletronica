import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Favicon from "../../assets/icon/favicon.svg";
import RegisterImage from "../../assets/images/register.jpg";

import { Input } from "../../components/input";
import { PinkButton } from "../../components/pinkButton";
export const Register = () => {
  return (
    <div className="register__container">
      <div className="register__form">
        <img src={Favicon} alt="logo" />
        <Input
          title="Seu email"
          placeholder="Email"
          type="email"
          icon="ri-mail-line"
          id="email"
        />
        <Input
          title="Sua senha"
          placeholder="Senha"
          type="password"
          icon="ri-lock-line"
          id="password"
        />
        <PinkButton title="Cadastrar" onSubmit={() => {}} />
      </div>
      <div className="register__content">
        <div className="register__infos">
          <h1 className="register__title">Comece um novo agendamento!</h1>
          <p className="register__text">
            E aproveite as vantagens de ter uma agenda eletrônica
          </p>
          <div className="register__btn">
            <p>Você já possui uma conta?</p>
            <Link to="/">Fazer login</Link>
          </div>
        </div>
        <img src={RegisterImage} alt="register" className="register__image" />
      </div>
    </div>
  );
};
