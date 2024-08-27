import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { addContact } from "../pages/contactRegistration";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/criar-contato" element={<addContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
