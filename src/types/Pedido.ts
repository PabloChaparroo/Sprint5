import { Cliente } from "./Cliente";
import { Domicilio } from "./Domicilio";
import { detallesPedido } from "./detallesPedido";

export interface Pedido {


  
  // Relaciones
  domicilioEntrega: Domicilio|null;
  cliente: Cliente | null;
  detallesPedido: detallesPedido[]; // Cambié detallesPedido a un array
}
