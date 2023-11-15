import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Componentes from "../pages/Componentes"
import Administarcion from "../pages/Administarcion"

const AppRoutes: React.FC = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/componentes" element={<Componentes/>}/>
            <Route path="/administracion" element={<Administarcion/>}/>
        
        </Routes>
    )

}
export default AppRoutes