import React, { useContext } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import CreateUser from "../Pages/CreateUser";
import Products from "../Pages/Products";
import RegisterUser from "../Pages/ClientReg";
import TableControl from "../Pages/Chart";
import Home from "../Pages/Home";
import { AuthProvider, AuthContext } from "../Context/auth";

export default function MainRoutes() {
  const Private = ({ children }) => {
    const { authenticated, loading } = useContext(AuthContext);

    if (loading) {
      return <div className="loading" />;
    }

    if (!authenticated) {
      return <Navigate to="/" />;
    }
    return children;
  };
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/products" element={<Products />} />
            <Route path="/chart" element={<TableControl />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}
