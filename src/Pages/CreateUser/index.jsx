import { Button, Input, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";

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

export default function CreateUser() {
  const navigation = useNavigate();
  return (
    <>
      <NavBar/>
      <div
        style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
        className="root"
      >
        <div className="createBox">
          <p>Criar novo usuário</p>
          <Image className="pillsimg" src="/user1.png" />
          <Input className="iptArea" placeholder="Nome" />
          <Input className="iptArea" placeholder="Usuario" />
          <Input className="iptArea" placeholder="Senha" />
          <Button
            onClick={() => {
              navigation("/register");
            }}
            className="submitBtn"
            style={submitBtn}
            ghost
          >
            Cadastrar
          </Button>
        </div>
      </div>
    </>
  );
}
