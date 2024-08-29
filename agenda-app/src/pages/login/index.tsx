import React, { useState } from "react";
import "./index.css";
import VideoHome from "../../assets/videos/loginVideo.mp4";
import { Title } from "../../components/title";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { PinkButton } from "../../components/pinkButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSingIn = async () => {
    if (email === "" || password === "") {
      return;
    }
    try {
      await axios.post("http://localhost:5050/login", {
        email,
        password,
      });
      navigate("/home");
    } catch (error) {
      console.log(error);
      localStorage.removeItem("login");
      alert("Dados inválidos ou usuário inexistente");
    }
  };

  return (
    <div className="login__container">
      <video className="login__video" src={VideoHome} autoPlay loop muted />
      <div className="login__content">
        <Title title="Faça seu login" />
        <p className="login__text">
          Olá, essa será sua agenda eletrônica, onde poderá gerenciar seus
          contatos de forma dinamica.{" "}
        </p>
        <form className="form" id="form-login">
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

        <PinkButton title="Entrar" onClick={() => handleSingIn()} />
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
