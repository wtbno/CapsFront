import React, {useState, useEffect} from "react";
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
           <div style={{display:'flex', flexDirection:'column'}}>
          <Spin size="large" style={{marginTop:'15rem'}}/>
          </div>
        ) : (
      <div
        style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
        className="root"
      >
     
        <div className="createBox">
          <p>Criar novo usuário</p>
          <Image className="pillsimg" src="/user1.png" />
          <Input className="iptArea" placeholder="Nome" />
          <Input className="iptArea" placeholder="Usuario" />
  
          <Input
            EyeTwoTone
            type="password"
            id="senha"
            name="senha"
            className="iptArea"
            placeholder=" Digite sua senha"
          />
          <Button type="ghost" onClick={() => showPass()}>
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
