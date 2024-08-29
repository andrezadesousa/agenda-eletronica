import { React, useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { AddContact } from "../pages/add-contact";
import { EditContact } from "../pages/edit-contact";
import PrivateRoute from "./privateRoutes";
import AuthProvider from "../contexts/authContext";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/home" element={<Home />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/criar-contato" element={<AddContact />} />
        <Route path="/editar-contato/:id" element={<EditContact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
