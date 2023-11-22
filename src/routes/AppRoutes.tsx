import * as React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administracion from "../pages/Administracion"
import Login from "../pages/Login"
import Registro from "../pages/Registro"
import UnidadMedidaTable from "../pages/UnidadMedidaPage"
import RubrosPage from '../pages/RubrosPage';

const PrivateRoute = React.lazy(() => import('./PrivateRoute'));


const AppRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/componentes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
            <Route element={<PrivateRoute element={<RubrosPage />} />} path="/rubros" />
            <Route path="/unidadMedidas" element={<UnidadMedidaTable/>}/>
            <Route element={<Login />} path="/login" />
            <Route element={<Registro />} path="/registro" /> 
        </Routes>
    )

}
export default AppRoutes