import { Button, Input, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const submitBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius:"10px"
};

const barBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius:"10px",
  maxWidth: '50%'
}

export default function RegisterUser() {
  const navigation = useNavigate();
  return (
    <>
      <div className="navBar">
        <Image
          onClick={() => {
            navigation("/");
          }}
          className="pillsimg"
          src="/pills3.png"
        />
        <Button style={barBtn}>Cadastro de clientes</Button>
        <Button style={barBtn}>Cadastro Produtos</Button>
        <Button style={barBtn}>Cadastro de pedidos</Button>
      </div>
      <div
        style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
        className="root"
      >
        <div className="createBox">
          <p>Cadastrar produtos</p>
          <Image className="pillsimg" src="/user1.png" />
          <Input className="iptArea" placeholder="Razão Social" />
          <Input className="iptArea" placeholder="CNPJ" />
          <Input className="iptArea" placeholder="Endereço" />
          <Button  onClick={() => {
              navigation("/requests");
            }} className="submitBtn" style={submitBtn} ghost>
            Cadastrar
          </Button>
        </div>
      </div>
    </>
  );
}
