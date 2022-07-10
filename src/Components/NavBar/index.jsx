import React, {useContext} from "react";
import { AuthContext } from "../../Context/auth";
import { Button} from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";



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

export default function NavBar() {
  
  const navigation = useNavigate();
  return (
    <>
      <div className="navBar">
        <Button
          onClick={() => {
            navigation("/create");
          }}
          style={barBtn}
        >
          Novo Usuário
        </Button>

        <Button
          onClick={() => {
            navigation("/register");
          }}
          style={barBtn}
        >
          Cadastro de clientes
        </Button>
        <Button
          onClick={() => {
            navigation("/products");
          }}
          style={barBtn}
        >
          Cadastro Produtos
        </Button>
        <Button
          onClick={() => {
            navigation("/chart");
          }}
          style={barBtn}
        >
          Cadastro de pedidos
        </Button>
        <a
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
          }}
        >
          Sair
          <img
            onClick={() => {
              navigation("/");
            }}
            className="pillsimg"
            src="/pills3.png"
          />
        </a>
      </div>
    </>
  );
}
