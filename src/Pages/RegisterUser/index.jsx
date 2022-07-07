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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Spin size="large" style={{ marginTop: "15rem" }} />
        </div>
      ) : (
        <div
          style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
          className="root"
        >
          <div className="newClientBox">
            <p>Cadastrar novo cliente</p>
         
              <img className="pillsimg" src="/user1.png" />
   

            <Input className="iptArea" placeholder="Razão Social" />
            <Input className="iptArea" placeholder="CNPJ" />
            <Input className="iptArea" placeholder="Endereço" />
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
