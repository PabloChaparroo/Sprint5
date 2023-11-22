import { Navigate } from "react-router-dom";
import useIsLoggedIn from "../components/PrivateRoute/useIsLoggedIn";


type PrivateRouteProps = {
  element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  //Utils
  const isLoggedIn = useIsLoggedIn();
  

  //Render
  if (isLoggedIn) {
    return element;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;