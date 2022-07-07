import { Button, Input, Image } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";

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
      <NavBar/>
      <div
        style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
        className="root"
      >
        <div className="createBox">
          <p>Cadastrar novo cliente</p>
          <Image className="pillsimg" src="/user1.png" />
          <Input className="iptArea" placeholder="Razão Social" />
          <Input className="iptArea" placeholder="CNPJ" />
          <Input className="iptArea" placeholder="Endereço" />
          <Button  onClick={() => {
              navigation("/products");
            }} className="submitBtn" style={submitBtn} ghost>
            Cadastrar
          </Button>
        </div>
      </div>
    </>
  );
}
