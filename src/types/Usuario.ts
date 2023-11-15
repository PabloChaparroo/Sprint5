import { Cliente } from "./Cliente";
import { Role } from "./Role";

export interface Usuario {
    id: number,
    username: string,
    
    fechaAltaUsuario: string,
    fechaModificacionUsuario: string,
    fechaBajaUsuario: string,

    //relaciones
    role: Role,
    cliente: Cliente,
  }