import { Domicilio } from "./Domicilio";

export interface Cliente {
    id: number;
    nombre: string;
    apellido: string;
    telefono: string;
    mail: string;
    fechaHoraAltaCliente: string;
    fechaHoraModificacionCliente: string | null;
    fechaHoraBajaCliente: string | null;
    estadoCliente: string | null;
    
    //Relaciones
    domicilioList: Domicilio[];
 }
  