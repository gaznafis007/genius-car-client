import React from "react";
import { useContext } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className=" border-8 mx-auto animate-spin rounded-full border-dashed h-20 w-20 border-green-500 "></div>
    );
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
