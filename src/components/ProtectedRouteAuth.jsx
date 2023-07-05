import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRouteAuth = ({ component: Component, isLoggedIn, ...props }) => {
  return isLoggedIn ? <Navigate to="/movies" replace /> : <Component {...props} />;
};

export default ProtectedRouteAuth;