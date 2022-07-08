import React, { useState, useEffect } from "react";
import { Button, Input, Image, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";
import NavBar from "../../Components/NavBar";
import { EyeTwoTone } from "@ant-design/icons";

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
  const [name, setName] = useState();
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  function showPass() {
    const tipo = document.getElementById("senha");
    if (tipo.type === "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
  }
  const navigation = useNavigate();
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
          <div className="createUserBox">
            <p>Criar novo usuário</p>
            <img className="userAdd" src="/user1.png" />
            <Input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="iptArea"
              placeholder="Nome"
              value={name}
            />
            <Input
              onChange={(e) => {
                setUserId(e.target.value);
              }}
              className="iptArea"
              placeholder="Usuario"
              value={userId}
            />
            <Input
              EyeTwoTone
              type="password"
              id="senha"
              name="senha"
              className="iptArea"
              placeholder=" Digite sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button
              style={{ borderRadius: "30px", border: "1px solid #336d0d" }}
              type="ghost"
              onClick={() => showPass()}
            >
              <EyeTwoTone />
            </Button>

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
      )}
    </>
  );
}
