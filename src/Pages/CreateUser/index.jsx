import { Button, Input, Image } from "antd";
import React from "react";
import "./style.css";

export default function CreateUser() {
  return (
    <>
      <div className="navBar">
        <Image className="pillsimg" src="/pillsop.png" />
        <Button>Cadastro de clientes</Button>
        <Button>Cadastro Produtos</Button>
        <Button>Cadastro de pedidos</Button>
      </div>
      <div  style={{ backgroundImage: "url(" + "dnapills.png" + ")" }} className="root">
      
        <div className="createBox">
          <p>Cadastrar novo usuário</p>
          <Image className="pillsimg" src="/user1.png" />
          <Input className="iptArea" placeholder="Nome"></Input>
          <Input className="iptArea" placeholder="Usuario"></Input>
          <Input className="iptArea" placeholder="Senha"></Input>
        </div>
      </div>
    </>
  );
}
