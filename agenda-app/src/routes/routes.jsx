import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import { Login } from "../pages/login";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
