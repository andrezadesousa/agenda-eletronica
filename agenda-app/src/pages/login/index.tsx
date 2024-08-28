import React from "react";
import "./index.css";
import VideoHome from "../../assets/videos/loginVideo.mp4";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { PinkButton } from "../../components/pinkButton";

export const Login = () => {
  return (
    <div className="login__container">
      <video className="login__video" src={VideoHome} autoPlay loop muted />
      <div className="login__content">
        <Title title="Faça seu login" />
        <p className="login__text">
          Olá, essa será sua agenda eletrônica, onde poderá gerenciar seus
          contatos de forma dinamica.{" "}
        </p>
        <Input
          title="Nome"
          placeholder="Nome"
          type="text"
          icon="ri-user-line"
          id="name"
        />
        <Input
          title="Sua senha"
          placeholder="Senha"
          type="password"
          icon="ri-lock-line"
          id="password"
        />
        <PinkButton title="Entrar" onSubmit={() => {}} />
        <div className="login__footer">
          <p className="login__footer__text">
            Ainda não possui uma conta?{" "}
            <Link to="/sign-up">Crie uma agora</Link>
          </p>
        </div>
      </div>
    </div>
  );
};
