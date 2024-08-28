import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

import Favicon from "../../assets/icon/favicon.svg";
import RegisterImage from "../../assets/images/register.jpg";

import { Input } from "../../components/input";
import { PinkButton } from "../../components/pinkButton";
import { Form } from "../../components/form";
export const Register = () => {
  return (
    <div className="register__container">
      <div className="register__form">
        <img src={Favicon} alt="logo" />
        <Form id="form-register">
          <Input
            title="E-mail"
            placeholder="email@gmail.com"
            type="email"
            icon="ri-mail-line"
            id="email"
          />
          <Input
            title="Sua senha"
            placeholder="Digite a senha"
            type="password"
            icon="ri-lock-line"
            id="password"
          />
        </Form>
        <PinkButton title="Cadastrar" onClick={() => {}} />
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
