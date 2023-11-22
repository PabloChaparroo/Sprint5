import * as React from "react";
import { Navigate } from "react-router-dom";
import useIsLoggedIn from "./useIsLoggedIn";



type PrivateRouteProps = {
  element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  // Utils
  const isLoggedIn: boolean = useIsLoggedIn();

  // Render
  if (isLoggedIn) {
    return element;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;