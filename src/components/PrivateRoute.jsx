import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');  // Check login status
  return isLoggedIn === 'true' ? <Outlet /> : <Navigate to="/" />;  // If logged in, render child routes (e.g., /home), else redirect to login
};

export default PrivateRoute;
