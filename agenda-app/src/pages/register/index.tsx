import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";

import Favicon from "../../assets/icon/favicon.svg";
import RegisterImage from "../../assets/images/register.jpg";

import { Input } from "../../components/input";
import { PinkButton } from "../../components/pinkButton";
import axios from "axios";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const setClear = () => {
    setEmail("");
    setPassword("");
  };

  const handleSignUp = async () => {
    try {
      await axios.post("http://localhost:5050/", {
        email,
        password,
      });
      navigate("/");
      setClear();
      alert("Cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register__container">
      <div className="register__form">
        <img src={Favicon} alt="logo" />
        <form className="form" id="form-register">
          <Input
            title="E-mail"
            placeholder="email@gmail.com"
            type="email"
            icon="ri-mail-line"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Sua senha"
            placeholder="Digite a senha"
            type="password"
            icon="ri-lock-line"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <PinkButton title="Cadastrar" onClick={() => handleSignUp()} />
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
