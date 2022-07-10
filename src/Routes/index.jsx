import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CreateUser from "../Pages/CreateUser";
import Products from "../Pages/Products";
import RegisterUser from "../Pages/ClientReg";
import TableControl from "../Pages/Chart";
import Home from "../Pages/Home";
import { AuthContext } from "../Context/auth";

export default function MainRoutes() {
  const [user, setUser] = useState(null);
  const login = (email, password) => {
    console.log("login", { email, password });
    setUser({id:'123', email})//Fake user
  };
  const logout = () => {
    console.log("logout");
  };
  return (
    <>
      <Router>
        <AuthContext.Provider
          value={{ authenticated: !!user, user, login, logout }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/chart" element={<TableControl />} />
          </Routes>
        </AuthContext.Provider>
      </Router>
    </>
  );
}
