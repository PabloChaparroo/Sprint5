import React from "react";
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    element: React.ReactNode;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
    // Utils
    // Lógica para verificar si hay un token en el localStorage
    const token = localStorage.getItem("token");

    if (token) {
        return element;
    }
    
    // Si no hay token, redirige a la página de inicio de sesión
    return <Navigate to="/login" />;
}

export default PrivateRoute;
