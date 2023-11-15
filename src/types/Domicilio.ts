import { Localidad } from "./Localidad";

export interface Domicilio {
    id: number;
    calle: string;
    nroCalle: number;
    pisoDpto: number;
    nroDpto: number;
    fechaHoraAltaDomicilio: string;
    fechaHoraModificacionDomicilio: string | null;
    fechaHoraBajaDomicilio: string | null;
    
    //Relaciones
    localidad: Localidad;
}