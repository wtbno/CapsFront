import { Button, Input, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const submitBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
};

const barBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
  maxWidth: "50%",
};

export default function NavBar() {
  const navigation = useNavigate();
  return (
    <>
      <div className="navBar">
        <img
          onClick={() => {
            navigation("/");
          }}
          className="pillsimg"
          src="/pills3.png"
        />

        <Button
          onClick={() => {
            navigation("/create");
          }}
          style={barBtn}
        >
          Cadastro de clientes
        </Button>
        <Button
          onClick={() => {
            navigation("/products");
          }}
          style={barBtn}
        >
          Cadastro Produtos
        </Button>
        <Button
          onClick={() => {
            navigation("/chart");
          }}
          style={barBtn}
        >
          Cadastro de pedidos
        </Button>
      </div>
    </>
  );
}
