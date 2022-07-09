import React, { useState, useEffect } from "react";
import { Button, Input, Spin } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";

import { EyeTwoTone } from "@ant-design/icons";

const submitBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
};

export default function CreateUser() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isValidName, setIsValidName] = useState('');

  const handleName = () => {
    if (name === '') {
      setIsValidName(false)
    }else setIsValidName(true)
  }

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
                setEmail(e.target.value);
              }}
              className="iptArea"
              placeholder="Usuario"
              value={email}
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
              value={password}
            />
            <Button
              style={{ borderRadius: "30px", border: "1px solid #336d0d" }}
              type="ghost"
              onClick={() => showPass()}
            >
              <EyeTwoTone />
            </Button>

            <div className="btnBox">
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
              <Button
                onClick={() => {
                  navigation("/");
                }}
                className="submitBtn"
                style={submitBtn}
                ghost
              >
                Voltar
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
