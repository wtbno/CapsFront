import React, { useState, useEffect } from "react";

import { Button, Spin } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigation = useNavigate();


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
   
    </>
  );
}
