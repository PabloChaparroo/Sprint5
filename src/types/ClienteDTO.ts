import {Domicilio} from '../types/Domicilio';

export interface ClienteDTO {
    username: string,
    id: number,
    nombre: string,
    apellido: string,
    telefono: string,
    mail: string,
    fechaHoraModificacionCliente: string,
    domicilioList: Domicilio[],
}