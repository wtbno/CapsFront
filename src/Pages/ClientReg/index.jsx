import React, { useEffect, useState } from "react";
import { Button, Input, Image, Spin } from "antd";
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

export default function RegisterUser() {
  const [corpName, setCorpName] = useState();
  const [cnpj, setCnpj] = useState();
  const [adress, setAdress] = useState();

  const navigation = useNavigate();

  
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);
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
          <div className="newClientBox">
            <p>Cadastrar novo cliente</p>

            <img className="pillsimg" src="/user1.png" />

            <Input
              onChange={(e) => {
                setCorpName(e.target.value);
              }}
              className="iptArea"
              placeholder="Razão Social"
              value={corpName}
            />
            <Input
              onChange={(e) => {
                setCnpj(e.target.value);
              }}
              className="iptArea"
              placeholder="CNPJ"
              value={cnpj}
            />
            <Input
              onChange={(e) => {
                setAdress(e.target.value);
              }}
              className="iptArea"
              placeholder="Endereço"
              value={adress}
            />
            <Button
              onClick={() => {
                navigation("/products");
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
