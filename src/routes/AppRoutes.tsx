import * as React from 'react';
import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administracion from "../pages/Administracion"
import Login from "../pages/Login"
import Registro from "../pages/Registro"
import RubroArticuloInsumoTable from "../components/RubroArticuloInsumo/RubroArticuloInsumo"
import UnidadMedidaTable from "../pages/UnidadMedidaPage"



const AppRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/componentes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
            <Route path="/rubro" element={<RubroArticuloInsumoTable/>}/>
            <Route path="/unidadMedidas" element={<UnidadMedidaTable/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/registro" element={<Registro/>}/>
        </Routes>
    )

}
export default AppRoutes