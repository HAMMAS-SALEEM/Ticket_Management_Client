import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../pages/Home";

const ProtectedRoutes = ({signedIn, handleAuth}) => {
  return signedIn ? <Home handleAuth={handleAuth} /> : <Navigate to="/login" />
}

export default ProtectedRoutes;