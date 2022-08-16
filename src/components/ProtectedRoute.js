import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
const ProtectedRoute = ({ children }) => {
  const { user } = useUserAuth();
  const navigate = useNavigate()
  console.log("Check user in Private: ", user);
  if (!user || Object.keys(user).length === 0) {
    return navigate("/login");
  }
  return children;
};
export { ProtectedRoute };