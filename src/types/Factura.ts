import { DetalleFactura } from "./DetalleFactura";
import { Pedido } from "./Pedido";

export interface Factura {
    
    
    //Relaciones
    formaPago: FormaPago;
    tipoFactura: TipoFactura;
    pedido: Pedido;
    detalleFacturaList: DetalleFactura[];
}
