import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CreateUser from "../Pages/CreateUser";
import Products from "../Pages/Products";
import RegisterUser from "../Pages/ClientReg";
import TableControl from "../Pages/Chart";
import Home from "../Pages/Home";
import { AuthProvicer } from "../Context/auth";

export default function MainRoutes() {
  
  return (
    <>
      <Router>
       <AuthProvicer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/chart" element={<TableControl />} />
          </Routes>
          </AuthProvicer>
      </Router>
    </>
  );
}
