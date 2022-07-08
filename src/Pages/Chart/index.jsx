import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table, Spin } from "antd";
import NavBar from "../../Components/NavBar";

import { UnorderedListOutlined } from "@ant-design/icons";
import "./style.css";

export default function TableControl() {
  // Sample Data for the table
  const approvedOrders = [
    {
      key: "1",
      username: "Gourav",
      Produtos: 10,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "2",
      username: "Kartik",
      Produtos: 20,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "3",
      username: "Madhu",
      Produtos: 30,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "4",
      username: "Karu",
      Produtos: 40,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "5",
      username: "Dinesh",
      Produtos: 50,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
  ];
  const ordersInProcess = [
    {
      key: "1",
      username: "Gourav",
      Produtos: 10,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "2",
      username: "Kartik",
      Produtos: 20,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "3",
      username: "Madhu",
      Produtos: 30,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "4",
      username: "Karu",
      Produtos: 40,
      Valor: "",
      Quantidade: "",
      Status: "",
    },
    {
      key: "5",
      username: "Dinesh",
      Produtos: 50,
      Valor: "",
      Quantidade: "",
      Status: "",
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Spin size="large" style={{ marginTop: "15rem" }} />
        </div>
      ) : (
        <div>
          <h1>
            <UnorderedListOutlined size={"large"} style={{ margin: "10px" }} />
            Monitoramento de pedidos
          </h1>
          <div className="root">
            <div
              style={{
                border: "solid 1px #5fd",
                display: "flex",
                width: "90%",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div className="firstTable">
                <Table dataSource={approvedOrders} columns={columns} />
              </div>
              <div className="secondTable">
                <Table dataSource={ordersInProcess} columns={columns} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
