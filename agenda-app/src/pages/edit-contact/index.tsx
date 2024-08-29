import React, { useEffect, useState } from "react";
import "./index.css";

import AvatarImage from "../../assets/images/boy-yellow-headphones.png";
import { Input } from "../../components/input";

import Favicon from "../../assets/icon/icon.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PinkButton } from "../../components/pinkButton";
import { Form } from "../../components/form";
import axios from "axios";

export const EditContact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const parametros = useParams();
  const navigate = useNavigate();

  const setClear = () => {
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
  };

  const handleGetContact = async () => {
    try {
      const data = await axios.get(
        `http://localhost:5050/list-contacts/${parametros.id}`,
        {}
      );
      console.log(data.data);
      setName(data.data.name);
      setAddress(data.data.address);
      setPhone(data.data.phone);
      setEmail(data.data.email);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      return navigate("/");
    }
    handleGetContact();
  }, [parametros.id]);

  const handleEditContact = async () => {
    try {
      await axios.patch(
        `http://localhost:5050/update-contact/${parametros.id}`,
        {
          name,
          address,
          phone,
          email,
        }
      );
      navigate("/home");
      setClear();
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    localStorage.removeItem("login");
  };

  return (
    <section className="editContact__section">
      <div className="editContact__header">
        <img src={Favicon} alt="logo" />
        <p>Editar contato</p>
        <Link to="/home" className="home__link">
          Vizualisar lista de contatos
        </Link>
        <Link to="/" className="home__link" onClick={logout}>
          Sair
        </Link>
      </div>
      <div className="editContact__container">
        <div className="editContact__content">
          <h1 className="editContact__title">Editando contato da lista?</h1>
          <p className="editContact__text">
            Ao finalizar, aproveite as vantagens de ter uma agenda eletrônica
          </p>
          <img src={AvatarImage} alt="avatar" className="editContact__image" />
        </div>
        <div className="editContact__form">
          <Form id="form-contact">
            <Input
              title="Nome"
              placeholder="Nome do contato"
              type="text"
              icon="ri-user-line"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              title="Endereço"
              placeholder="Av Paulista"
              type="text"
              icon="ri-map-pin-line"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              title="Telefone"
              placeholder="11 99999-9999"
              type="text"
              icon="ri-phone-line"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              title="E-mail"
              placeholder="email@gmail.com"
              type="email"
              icon="ri-mail-line"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form>
          <PinkButton
            title="Atualizar"
            onClick={() => {
              handleEditContact();
            }}
          />
        </div>
      </div>
    </section>
  );
};
