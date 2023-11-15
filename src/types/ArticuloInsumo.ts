import { Rubro } from "./Rubro";
import { UnidadMedida } from "./UnidadMedida";

export interface ArticuloInsumo {

    
    //Relaciones
    unidadMedida: UnidadMedida;
    rubro: Rubro;
  }