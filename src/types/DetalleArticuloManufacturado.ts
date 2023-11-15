import { ArticuloInsumo } from "./ArticuloInsumo";

export interface DetalleArticuloManufacturado {
    id: number;
    cantidad: number;
    
    //Relaciones
    articuloInsumo: ArticuloInsumo;
  }