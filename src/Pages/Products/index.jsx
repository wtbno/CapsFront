import { Button, Input, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css'

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

export default function Products() {
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
        <div className="regBox">
          <p>Cadastrar produtos</p>
          <Image className="pillsimg" src="/box.png" />
          <Input className="iptArea" placeholder="Codigo do Produto" />
          <Input className="iptArea" placeholder="Descrição do Produto" />
          <Input className="iptArea" placeholder="Unidade de Medida" />
          <Input className="iptArea" placeholder=" Valor de Compra" />
          <Input className="iptArea" placeholder="Preço de Venda" />

          <Button  onClick={() => {
              navigation("/chart");
            }} className="submitBtn" style={submitBtn} ghost>
            Cadastrar
          </Button>
        </div>
      </div>
    </>
  );
}
