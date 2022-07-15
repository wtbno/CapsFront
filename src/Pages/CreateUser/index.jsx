import React, { useState, useEffect } from "react";
import { Button, Input, Form } from "antd";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { api } from "../../services/api";
import * as yup from "yup";

const submitBtn = {
  color: "green",
  border: "1px green solid",
  borderRadius: "10px",
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 80,
    },
  },
};

export default function CreateUser() {
  const navigation = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [form, setForm] = useState('');
  const [value, setValue] = useState();
  const [loading, setLoading] = useState()

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  //API
  useEffect(() => {
    api.post(() => "/novo".saveId()).then((res) => res.data);
    setValue("email ", email);
    setValue("password", password);
    setValue("name", name);
  }, [api]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      
      const data = {
        name,
        email,
        password,
      };
     
      const response = await api.post("/novo", data);
      console.log(data, "Usuário criado");
      if (response.status === 201) navigation("/");
    } catch (error) {
      console.log("Erro ao criar usuário" + error);
    }
  };
  console.log(name, email, password, "TESTE" );
  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
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
          style={{ backgroundImage: "url(" + "dnapills.png" + ")" }}
          className="root"
        >
          <div className="createUserBox">
            <h1>Criar novo usuário</h1>
            <h4>Preencha todos os campos e clique em salvar</h4>
            <img className="userAdd" src="/user1.png" />
            <Form
              name="basic"
              labelCol={{
                span: 80,
              }}
              wrapperCol={{
                span: 160,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Por favor insira seu nome!",
                  },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  onChange={(e) => {
                    setName(e.target.value);
                    handleChange(e.target.value);
                  }}
                  placeholder="Nome"
                  value={name}
                />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "E-mail inválido",
                  },
                  {
                    required: true,
                    message: "Insira seu E-mail!",
                  },
                ]}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  name="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    handleChange(e.target.value);
                  }}
                  placeholder="Usuario.: Email"
                  value={email}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Insira uma senha de 6 digitos",
                  },
                ]}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  id="senha"
                  name="senha"
                  placeholder=" Digite sua senha"
                  onChange={(e) => {
                    setPassword(e.target.value);
                    handleChange(e.target.value);
                  }}
                  value={password}
                />
              </Form.Item>

              <div className="btnBox">
                <Form.Item {...tailFormItemLayout}>
                  <Button
                    onClick={(e) => {
                      navigation("/");
                      handleChange(e.target.value);
                      
                    }}
                    style={submitBtn}
                    type="primary"
                    htmlType="submit"
                    ghost
                  >
                    Salvar
                  </Button>
                </Form.Item>

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
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
