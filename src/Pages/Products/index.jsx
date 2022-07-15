import React, { useEffect, useState } from "react";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";
import { api } from "../../services/api";

const submitBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
};



export default function Products() {
  const [productCode, setProductCode] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [unitMeas, setUnitMeas] = useState("");
  const [value, setValue] = useState();

  const navigation = useNavigate();
  const currencyFormater = (value) => {
    // only numbers from value
    let newValue = value;
    newValue = newValue.replace(/\D/g, "");
    newValue = newValue.replace(/(\d)(\d{2})$/, "$1,$2");
    newValue = newValue.replace(/(?=(\d{3})+(\D))\B/g, ".");
    return newValue;
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);



  useEffect(() => {
    api.post(() => "/product".saveId()).then((res) => res.data);

    setValue("productCode ", productCode);
    setValue("productDesc", productDesc);
    setValue("buyPrice ", buyPrice);
    setValue("salePrice", salePrice);
    setValue("unitMeas ", unitMeas);
  
  }, [api]);

  const handleSendData = async () => {
    try {
      alert("Login");
      const data = {
        productCode,
        productDesc,
        buyPrice,
        salePrice,
        unitMeas
      };
      const response = await api.post("/product", data);
      console.log(data, "data log");
      if (response.status === 201) navigation("/product");
    } catch (error) {
      console.log("Algo deu errado" + error);
    }
  };

  return (
    <>
      <NavBar />
      {isLoading ? (
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "150px", marginTop: "15rem", left: "5rem" }}
          src="/pillsLoad.gif"
        />
      </div>
      ) : (
        <div
          style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
          className="root"
        >
          <div className="regBox">
            <p>Cadastrar produtos</p>
            <img className="pillsimg" src="/box.png" />
            <Input
              onChange={(e) => setProductCode(e.target.value)}
              className="iptArea"
              placeholder="Codigo do Produto"
              value={productCode}
            />
            <Input
              onChange={(e) => setProductDesc(e.target.value)}
              className="iptArea"
              placeholder="Descrição do Produto"
              value={productDesc}
            />
            <Input
              type="number"
              className="iptArea"
              placeholder="Unidade de Medida"
              onChange={(e) => setUnitMeas(e.target.value)}
              value={unitMeas}
            />
            <Input
              id="valor"
              onChange={(e) => setBuyPrice(currencyFormater(e.target.value))}
              className="iptArea"
              placeholder="Valor de Compra R$"
              value={buyPrice}
            />
            <Input
              onChange={(e) => setSalePrice(currencyFormater(e.target.value))}
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
      )}
    </>
  );
}
