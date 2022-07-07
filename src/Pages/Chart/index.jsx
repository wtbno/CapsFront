import React from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import NavBar from "../../Components/NavBar";
import './style.css'

export default function TableControl() {
  // Sample Data for the table
  const approvedOrders = [
    { key: "1", username: "Gourav", age: 10 },
    { key: "2", username: "Kartik", age: 20 },
    { key: "3", username: "Madhu", age: 30 },
    { key: "4", username: "Karu", age: 40 },
    { key: "5", username: "Dinesh", age: 50 },
  ];
  const ordersInProcess = [
    { key: "1", username: "Gourav", age: 10 },
    { key: "2", username: "Kartik", age: 20 },
    { key: "3", username: "Madhu", age: 30 },
    { key: "4", username: "Karu", age: 40 },
    { key: "5", username: "Dinesh", age: 50 },
  ];

  // Sample Columns data
  const columns = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  return (
    <>
      <NavBar />
      <h4>Monitoramento de pedidos</h4>
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
    </>
  );
}
