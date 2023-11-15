
import { CategoriaArticuloManufacturado } from "./CategoriaArticuloManufacturado";
import { DetalleArticuloManufacturado } from "./DetalleArticuloManufacturado";

export interface ArticuloManufacturado {
    

    //Relaciones
    detalleArticuloManufacturadoList: DetalleArticuloManufacturado[];
    categoriaArticuloManufacturado: CategoriaArticuloManufacturado;

}

