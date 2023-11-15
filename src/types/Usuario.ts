import { Cliente } from "./Cliente";
import { Role } from "./Role";

export interface Usuario {


    //relaciones
    role: Role,
    cliente: Cliente,
  }