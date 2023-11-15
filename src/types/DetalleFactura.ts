import { ArticuloManufacturado } from "./ArticuloManufacturado";

export interface DetalleFactura {
    id: number;
    cantidad: number;
    subTotal: number;
    
    //Relaciones
    articuloManufacturado: ArticuloManufacturado;
  }
  