import React, { useEffect, useState } from "react";

import "./index.css";

import Favicon from "../../assets/icon/icon.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AvatarImage from "../../assets/images/boy-yellow-headphones.png";

import axios from "axios";
export const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const login = localStorage.getItem("login");
    if (!login) {
      return navigate("/");
    }
    handleListContacts();
    if (location.state) {
      setIsAdmin(true);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("login");
  };

  const handleListContacts = async () => {
    try {
      const data = await axios.get("http://localhost:5050/list-contacts", {});
      setContacts(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteContact = async (id: any) => {
    try {
      await axios.delete(`http://localhost:5050/delete-contact/${id}`);
      handleListContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="home__section">
      <div className="home__container">
        <div className="home__header">
          <img src={Favicon} alt="logo" />
          <p>Sua agenda eletrônica</p>
          <Link to="/criar-contato" className="home__link">
            Crie um novo contato
          </Link>
          <Link to="/" className="home__link" onClick={logout}>
            Sair
          </Link>
        </div>
        <div className="home__table">
          <h1 className="home__table-title">Agenda Eletrônica</h1>
          <div className="home__table-header">
            <h1>Nome</h1>
            <h1>Endereço</h1>
            <h1>Telefone</h1>
            <h1>E-mail</h1>
          </div>
          {contacts.map((contact: any) => (
            <div className="home__table-body" key={contact._id}>
              <div className="home__table-contact">
                <h1>{contact.name}</h1>
                <h1>{contact.address}</h1>
                <h1>{contact.phone}</h1>
                <h1>{contact.email}</h1>
              </div>
              <div className="home__table-actions">
                <button
                  className="delete__btn"
                  onClick={() => handleDeleteContact(contact._id)}
                  disabled={isAdmin ? false : true}
                >
                  <i className="ri-delete-bin-line delete"></i>
                </button>
                <Link
                  to={`/editar-contato/${contact._id}`}
                  className="update__btn"
                >
                  <i className="ri-pencil-line update"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={AvatarImage} className="avatar" />
    </section>
  );
};
