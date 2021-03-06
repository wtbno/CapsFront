import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../Context/auth";
import { Button, Form, Checkbox, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

const submitBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
};

export default function Home() {
  const navigation = useNavigate();
  const { authenticated, login } = useContext(AuthContext);
  const [loading, setLoading] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //States do formulário
  const [value, setValue] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const handleChange = (e) => {
    console.log("Digitando...", e.target.name, e.target.value);
  };
  const onFinish = (values) => {
    console.log("Dados recebidos: ", { email, password }, values);
    login(email, password); //integ. context e API
  };

  //UseEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);


  //API
  useEffect(() => {
    api.post(() => "/login".saveId()).then((res) => res.data);

    setValue("email ", email);
    setValue("password", password);
  }, [api]);

  const handleSendData = async (e) => {

    try {
      alert("Login efetuado");
      const data = {
        email,
        password,
      };
      const response = await api.post("/login", data);
      console.log(data, "data log");
      if (response.status === 201) navigation("/register");
    } catch (error) {
      alert("Login não realizado " + error)
      console.log("Algo deu errado" + error);
    }
  };

 

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
          style={{ backgroundImage: "url(" + "bgimg2.jpg" + ")" }}
          className="root"
        >
          <div className="LoginMenu">
            <h1>Login</h1>
            {/* <p>{String(authenticated)}</p> */}
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Insira seu email",
                  },
                ]}
              >
                <Input
                     onChange={(e) => {
                      setPassword(e.target.value);
                      handleChange();
                    }}
                  placeholder="Email"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
           
                value={password}
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Insira sua senha",
                  },
                ]}
              >
                <Input.Password
                     onChange={(e) => {
                      setPassword(e.target.value);
                      handleChange();
                    }}
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item className="loginBox">
                <Button
                  onClick={() => {
                    handleSendData();
                  }}
                  style={submitBtn}
                  ghost
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Entrar
                </Button>
                <h4>Não possui cadastro?</h4>
                <a href="/create">Crie sua conta</a>
              </Form.Item>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
