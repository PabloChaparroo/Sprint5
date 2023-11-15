import { DetalleFactura } from "./DetalleFactura";
import { Pedido } from "./Pedido";

export interface Factura {
    
    
    //Relaciones
    formaPago: FormaPago;
    pedido: Pedido;
    detalleFacturaList: DetalleFactura[];
}
