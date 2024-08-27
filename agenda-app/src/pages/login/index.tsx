import React from "react";
import "./index.css";
import VideoHome from "../../assets/videos/loginVideo.mp4";
import { Title } from "../../components/title";

export const Login = () => {
  return (
    <div className="login__container">
      <video className="login__video" src={VideoHome} autoPlay loop muted />
      <div className="login__content">
        <Title title="Login" />
        <div className="login__input">
          <p>Seu email</p>
          <input type="email" placeholder="Email" />
        </div>
        <div className="login__input">
          <p>Sua senha</p>
          <input type="password" placeholder="Senha" />
        </div>
        <button className="login__button">Entrar</button>
      </div>
    </div>
  );
};
