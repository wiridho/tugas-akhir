import React from "react";

import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default PrivateRoute;
