import React, { useState } from "react";
import "./index.css";

import AvatarImage from "../../assets/images/boy-white-headphones.png";
import { Input } from "../../components/input";

import Favicon from "../../assets/icon/icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { PinkButton } from "../../components/pinkButton";
import { Form } from "../../components/form";

import axios from "axios";

export const AddContact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const setClear = () => {
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
  };

  const handleAddContact = async () => {
    if (name === "" || address === "" || phone === "" || email === "") {
      return alert("Preencha todos os campos");
    }
    try {
      await axios.post("http://localhost:5050/add-contact", {
        name,
        address,
        phone,
        email,
      });
      navigate("/home");
      setClear();
      alert("Cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="addContact__section">
      <div className="addContact__header">
        <img src={Favicon} alt="logo" />
        <p>Cadastrar um novo contato</p>
        <Link to="/home" className="home__link">
          Vizualisar lista de contatos
        </Link>
        <Link to="/" className="home__link">
          Sair
        </Link>
      </div>
      <div className="addContact__container">
        <div className="addContact__form">
          <Form id="form-contact">
            <Input
              title="Nome"
              placeholder="Nome do contato"
              type="text"
              icon="ri-user-line"
              id="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <Input
              title="Endereço"
              placeholder="Av Paulista"
              type="text"
              icon="ri-map-pin-line"
              id="address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
            <Input
              title="Telefone"
              placeholder="11 99999-9999"
              type="text"
              icon="ri-phone-line"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Input
              title="E-mail"
              placeholder="email@gmail.com"
              type="email"
              icon="ri-mail-line"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </Form>
          <PinkButton
            title="Cadastrar"
            onClick={() => {
              handleAddContact();
            }}
          />
        </div>
        <div className="addContact__content">
          <h1 className="addContact__title">Cadastrando um novo contato?</h1>
          <p className="addContact__text">
            Depois, aproveite as vantagens de ter uma agenda eletrônica!
          </p>
          <img src={AvatarImage} alt="avatar" className="addContact__image" />
        </div>
      </div>
    </section>
  );
};
