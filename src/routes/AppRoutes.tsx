import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administracion from "../pages/Administracion"
import RubroArticuloInsumoTable from "../components/RubroArticuloInsumo/RubroArticuloInsumo"

const AppRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/componentes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administracion/>}/>
            <Route path="/rubro" element={<RubroArticuloInsumoTable/>}/>

        </Routes>
    )

}
export default AppRoutes