import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {api, createSession } from "./../services/api";




export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    console.log("login", response.data);
    //Api session create

    const response = await createSession(email, password);

    const loggedUser = response.data.user;

    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);
    api.defaults.headers.Authorization = `Bearer ${token}`;

    setUser(loggedUser); //Fake user
    navigate("/register");
  };
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
