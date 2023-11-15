import { ArticuloManufacturado } from "./ArticuloManufacturado";

export interface detallesPedido {
    id: number;
    cantidad: number;
    subtotal: number;
    subTotalCosto: number;
    
    //Relaciones
    articuloManufacturado: ArticuloManufacturado;
}