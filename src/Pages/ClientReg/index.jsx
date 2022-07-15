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

const barBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
  maxWidth: "50%",
};

export default function RegisterUser() {
  const navigation = useNavigate();
  //States do formulário
  const [corpName, setCorpName] = useState();
  const [cnpj, setCnpj] = useState();
  const [adress, setAdress] = useState();

  const [value, setValue] = useState();

  //API
  useEffect(() => {
    api.post(() => "/client".saveId()).then((res) => res.data);

    setValue("corpName ", corpName);
    setValue("cnpj", cnpj);
    setValue("adress", adress);
  }, [api]);

  const handleSendData = async (e) => {
    try {
      alert("Cliente registrado");
      const data = {
        corpName,
        cnpj,
        adress,
      };
      const response = await api.post("/client", data);
      console.log(data, "data log");
      if (response.status === 201);
    } catch (error) {
      alert("Login não realizado " + error);
      console.log("Algo deu errado" + error);
    }
  };

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
               
              }}
              className="submitBtn"
              style={submitBtn}
              ghost
            >
              Cadastrar
            </Button>
            <Button
              onClick={() => {
                navigation("/products");
              }}
              className="submitBtn"
              style={submitBtn}
              ghost
            >
              Avançar
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
