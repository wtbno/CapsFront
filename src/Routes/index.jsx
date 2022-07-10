import React, { useContext, useState } from "react";
import { Route, Routes, BrowserRouter as Router, Navigate } from "react-router-dom";
import CreateUser from "../Pages/CreateUser";
import Products from "../Pages/Products";
import RegisterUser from "../Pages/ClientReg";
import TableControl from "../Pages/Chart";
import Home from "../Pages/Home";
import { AuthProvider, AuthContext } from "../Context/auth";

export default function MainRoutes() {
  const Private = (children) =>{
    const {authenticated} = useContext(AuthContext);

    if(!authenticated){
      return <Navigate to='/'/>
    }
    return children;
  };
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Private><CreateUser /></Private>} />
            <Route path="/register" element={<Private><RegisterUser /></Private>} />
            <Route path="/products" element={<Private><Products /></Private>} />
            <Route path="/chart" element={<Private><TableControl /></Private>} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}
