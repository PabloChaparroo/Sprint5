
import { CategoriaArticuloManufacturado } from "./CategoriaArticuloManufacturado";
import { DetalleArticuloManufacturado } from "./DetalleArticuloManufacturado";

export interface ArticuloManufacturado {
    id: number;
    costo: number;
    descripcionArticuloManufacturado: string;
    nombreArticuloManufacturado: string;
    precioVenta: number;
    tiempoEstimadoCocina: number;
    urlImagen_AM: string;
    fechaAltaArticuloManufacturado: string;
    fechaModificacionArticuloManufacturado: string | null;
    fechaBajaArticuloManufacturado: string | null;

    //Relaciones
    detalleArticuloManufacturadoList: DetalleArticuloManufacturado[];
    categoriaArticuloManufacturado: CategoriaArticuloManufacturado;

}

