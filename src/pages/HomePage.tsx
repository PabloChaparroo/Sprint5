
import { Carousel } from "react-bootstrap"
import CategoriasSelector from "../components/CategoriasSelector/CategoriasSelector"
import ProductList from "../components/ProductList/ProductList"
import CarouselInicio from "../components/CarouselInicio/CarouselInicio"
import AboutUs from "../components/AboutUs/AboutUs"



const HomePage = () => {
  return (
    <>  
        
        <CategoriasSelector/>
        <CarouselInicio/>
        <ProductList/>
        {/*<AboutUs/>*/}
        

    </>
  )
}

export default HomePage