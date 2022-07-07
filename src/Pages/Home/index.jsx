import React, { useState, useEffect } from "react";

import { Button, Spin } from "antd";
import "./style.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();
  const [loadings, setLoadings] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  return (
    <>
      {!isLoading && (
        <div
          style={{ backgroundImage: "url(" + "bgimg2.jpg" + ")" }}
          className="root"
        >
          <div className="LoginMenu">
            <p style={{ color: "#fff" }}>Bem vindo!</p>
            <Button
              className="btnLgn"
              type="primary"
              onClick={() => {
                navigation("/create");
              }}
            >
              Entrar e realizar cadastro
            </Button>
          </div>
        </div>
      )}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {isLoading && <Spin size="large" style={{ marginTop: "15rem" }} />}
      </div>
    </>
  );
}
