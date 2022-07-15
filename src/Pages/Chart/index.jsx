import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import NavBar from "../../Components/NavBar";
import { UnorderedListOutlined } from "@ant-design/icons";
import "./style.css";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";





export default function TableControl() {
  // Sample Data for the table
  const approvedOrders = [
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
  ];
  const ordersInProcess = [
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
    {
      id: "",
      productCode: "",
      productDesc: "",
      buyPrice: "",
      salePrice: "",
      unitMeas: "",
    },
  ];

  // Sample Columns data
  const columns = [
    {
      title: "Cliente",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Produtos",
      dataIndex: "Produtos",
      key: "Produtos",
    },
    {
      title: "Valor",
      dataIndex: "Valor",
      key: "Valor",
    },
    {
      title: "Quantidade",
      dataIndex: "Quantidade",
      key: "Quantidade",
    },
    {
      title: "Status",
      dataIndex: "Status",
      key: "Status",
    },
  ];


  const navigation = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  //States da tabela
  const [productCodeR, setProductCodeR] = useState("");
  const [productDescR, setProductDescR] = useState("");
  const [buyPriceR, setBuyPriceR] = useState("");
  const [salePriceR, setSalePriceR] = useState("");
  const [unitMeasR, setUnitMeasR] = useState("");
  const [value, setValue] = useState();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);


  useEffect(() => {
    api.post(() => "/product".saveId()).then((res) => res.data);

    setValue("productCodeR ", productCodeR);
    setValue("productDesc", productDescR);
    setValue("buyPrice ", buyPriceR);
    setValue("salePrice", salePriceR);
    setValue("unitMeas ", unitMeasR);
  }, [api]);

  const handleSendData = async () => {
    try {
      alert("Login");
      const data = {
        productCodeR,
        productDescR,
        buyPriceR,
        salePriceR,
        unitMeasR,
      };
      const response = await api.post("/", data);
      console.log(data, "data log");
      if (response.status === 201) navigation("/");
    } catch (error) {
      console.log("Algo deu errado" + error);
    }
  };

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
        <div>
          <h1>
            <UnorderedListOutlined size={"large"} style={{ margin: "10px" }} />
            Monitoramento de pedidos - VENDAS
          </h1>
          <div className="root">
            <div
              style={{
                border: "solid 1px #8bff55",
                borderRadius: "10px",
                display: "flex",
                width: "90%",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "50px",
                boxShadow: "0 -1px 8px 1px rgba(0,0,0,0.5)",
              }}
            >
              <div className="firstTable">
                Pedidos aprovados
                <img
                  style={{ width: "20px", marginLeft: "5px" }}
                  src="./ok.png"
                />
                <Table
                  onChange={() => {
                    setProductCodeR();
                    setProductDescR();
                    setBuyPriceR();
                    setSalePriceR();
                    setUnitMeasR();
                  }}
                  value={
                    productCodeR &&
                    productDescR &&
                    buyPriceR &&
                    salePriceR &&
                    unitMeasR
                  }
                  dataSource={approvedOrders}
                  columns={columns}
                />
              </div>
              <div className="secondTable">
                Pedidos pendentes
                <img
                  style={{ width: "20px", marginLeft: "5px" }}
                  src="./await.png"
                />
                <Table dataSource={ordersInProcess} columns={columns} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
