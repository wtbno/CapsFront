import React, { useState, useEffect, useContext } from "react";
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

function initialState() {
  return { user: "", password: "" };
}

export default function Home() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  const [user, setUser] = useState('');
  function onChange(event) {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });
  }

  const [values, setValues] = useState(initialState);

  const  login  = useContext('');
  const navigation = useNavigate();

  const [password, setPassword] = useState();
  const onFinish = (values) => {
    console.log("Dados recebidos: ", { user, password }, values);
    login(user, password); //integ. context e API
  };

  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    api.put(() => "/auth/login".saveId()).then((res) => res.data);

    setValue("user ", user);
    setValue("password", password);
  }, [api]);

  const handleSendData = async () => {
    try {
      const data = {
        user,
        password,
      };
      const response = await api.post("/auth/login", data);
      console.log(data, "data log");
      if (response.status === 201) navigation("/chart");
    } catch (error) {
      console.log(error);
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
                onChange={onChange}
                value={values.user}
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
                onChange={onChange}
                value={values.password}
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
