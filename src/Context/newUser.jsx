import React, { createContext, useEffect, useState } from "react";
import { getToken, isAuthenticated } from "../utils/authToken";
import { api } from "../utils/http";

export const NewUserContext = createContext();

const NewUserContextProvider = ({ children }) => {
  const [newUser, setNewUser] = useState([]);

  useEffect(() => {
    console.log("Novo usuário");
    if (newUser.length === 0 && isAuthenticated()) {
      const listFetch = async () => {
        try {
          console.count("newUsers");
          const res = await api.get("/newUser");
          console.log(res.data);
          setNewUser(res.data);
          //   setControl(control + 1);
        } catch (err) {
          console.log(err);
        }
      };
      listFetch();
    }
  });

  return (
    <NewUserContext.Provider value={{ newUser, setNewUser }}>
      {children}
    </NewUserContext.Provider>
  );
};

export default NewUserContextProvider;