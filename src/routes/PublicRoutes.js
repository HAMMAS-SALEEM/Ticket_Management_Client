import React from "react";
import { Navigate } from "react-router-dom";

const PublicRoutes = ({signedIn, component: Component, handleAuth}) => {
  return signedIn ? <Navigate to="/" /> : <Component handleAuth={handleAuth} />
};

export default PublicRoutes;