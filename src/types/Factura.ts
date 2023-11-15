import { DetalleFactura } from "./DetalleFactura";
import { Pedido } from "./Pedido";

export interface Factura {
    id: number;
    fechaHoraFacturacion: string;
    fechaModificacionFactura: string | null;
    fechaHoraBajaFacturacion: string | null;
    descuento: number;
    mpMerchantOrderId: string;
    mpPaymentId: string;
    mpPaymentType: string;
    mpPreferenceId: string;
    totalPrecioFactura: number;
    
    //Relaciones
    formaPago: FormaPago;
    tipoFactura: TipoFactura;
    pedido: Pedido;
    detalleFacturaList: DetalleFactura[];
}
