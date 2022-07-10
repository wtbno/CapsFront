import React, { useState, useEffect, useContext } from "react";

import { Button, Form, Checkbox, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import "./style.css";
import { useNavigate } from "react-router-dom";


const submitBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
};

export default function Home() {
  // const {authenticated, login} = useContext(AuthContext)
  const navigation = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState()
  const onFinish = (values) => {
    console.log("Dados recebidos: ", {email, password}, values);
    // login(email, password)
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

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
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Insira seu email",
                  },
                ]}
              >
                <Input
                  placeholder="Email"
                  prefix={<UserOutlined className="site-form-item-icon" />}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Insira sua senha",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item className="loginBox">
                <Button
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
