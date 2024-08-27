import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "../pages/login";
import { Register } from "../pages/register";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
