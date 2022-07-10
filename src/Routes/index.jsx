import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateUser from "../Pages/CreateUser";
import Products from "../Pages/Products";
import RegisterUser from "../Pages/ClientReg";
import TableControl from "../Pages/Chart";
import Home from "../Pages/Home";


export default function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/chart" element={<TableControl />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
