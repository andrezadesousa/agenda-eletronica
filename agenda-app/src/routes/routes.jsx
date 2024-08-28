import { React, useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { Home } from "../pages/home";
import { AddContact } from "../pages/add-contact";
import { EditContact } from "../pages/edit-contact";

import { AuthContext, AuthProvider } from "../AuthComtext";
import { Navigate } from "react-router-dom";

const RouterApp = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ token });
    }
  }, []);

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/criar-contato" element={<AddContact />} />
          <Route path="/editar-contato" element={<EditContact />} />
          <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default RouterApp;
