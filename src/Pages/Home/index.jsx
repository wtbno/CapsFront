import React from "react";
import { useState } from "react";
import { Button } from "antd";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();
  const [loadings, setLoadings] = useState([]);

  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  return (
    <div
      style={{ backgroundImage: "url(" + "backimg.jpeg" + ")" }}
      className="root"
    >
      <div className="LoginMenu">
        <p>Bem vindo!</p>
        <Button
          className="btnLgn"
          type="primary"
          loading={loadings[0]}
          onClick={() => {
            enterLoading(0);
            navigation("/create",[loadings]);
          }}
        >
          Entrar e realizar cadastro
        </Button>
      </div>
    </div>
  );
}
