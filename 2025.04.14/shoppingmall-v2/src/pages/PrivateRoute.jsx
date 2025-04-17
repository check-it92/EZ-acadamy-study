import React from "react";
import { Navigate } from "react-router-dom";
import ProductDetail from "./ProductDetail";
// import { useAuth } from "../AuthContext";
import { useSelector } from "react-redux";

const PrivateRoute = () => {
  // const { authenticate } = useAuth();
  const trueOk = useSelector((state) => state.auth.authenticate);
  return trueOk === true ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
