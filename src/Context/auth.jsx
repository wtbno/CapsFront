import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = (email, password) => {
    console.log("login auth", { email, password });
    //Api session create

    const loggedUser = {
      id: "123",
      email,
    };
    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "000") {
      setUser({ loggedUser }); //Fake user
      navigate("/register");
    }
  };
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user")
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
