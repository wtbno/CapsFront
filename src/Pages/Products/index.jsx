import { Button, Input, Image, InputNumber } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";
import { useState } from "react";

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
  const [buyPrice, setBuyPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");

  const navigation = useNavigate();
  const currencyFormater = (value) => {
    // only numbers from value
    let newValue = value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return newValue;
  };

  return (
    <>
      <NavBar />
      <div
        style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
        className="root"
      >
        <div className="regBox">
          <p>Cadastrar produtos</p>
          <Image className="pillsimg" src="/box.png" />
          <Input className="iptArea" placeholder="Codigo do Produto" />
          <Input className="iptArea" placeholder="Descrição do Produto" />
          <Input type="number" className="iptArea" placeholder="Unidade de Medida" />
          <Input
            id="valor"
            onChange={(e) => setBuyPrice(currencyFormater(e.target.value))}
            className="iptArea"
            placeholder="Valor de Compra R$"
            value={buyPrice}
          />
          <Input
            onChange={(e) => currencyFormater(setSalePrice(e.target.value))}
            className="iptArea"
            placeholder="Preço de Venda R$"
            value={salePrice}
          />

          <Button
            onClick={() => {
              navigation("/chart");
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
