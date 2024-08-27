import React from "react";
import "./index.css";
import VideoHome from "../../assets/videos/loginVideo.mp4";
import { Title } from "../../components/title";
import { Input } from "../../components/input";

export const Login = () => {
  return (
    <div className="login__container">
      <video className="login__video" src={VideoHome} autoPlay loop muted />
      <div className="login__content">
        <Title title="Login" />
        <Input title="Seu email" placeholder="Email" type="email" />
        <Input title="Sua senha" placeholder="Senha" type="password" />
        <button className="login__button">Entrar</button>
      </div>
    </div>
  );
};
