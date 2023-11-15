import { CategoriaArticuloManufacturado } from "../types/CategoriaArticuloManufacturado";


const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';

export const CategoriaArticuloManufacturadoService = {

    
    getAllArticuloManufacturado: async (): Promise<CategoriaArticuloManufacturado[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/CategoriaArticuloManufacturado/paged`);
        const data = await response.json();
        return data;
    },

    
    getArticuloManufacturado: async (id:number): Promise<CategoriaArticuloManufacturado> => {

        const response = await fetch (`${BASE_URL}/api/v1/CategoriaArticuloManufacturado/${id}`);
        const data = await response.json();
        return data;
        
    },

    createArticuloManufacturado:async (categoriaArticuloManufacturado : CategoriaArticuloManufacturado):Promise<CategoriaArticuloManufacturado> => {

        const response = await fetch(`${BASE_URL}/api/v1/CategoriaArticuloManufacturado`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(categoriaArticuloManufacturado)
        });

        const data = await response.json();
        return data;
        
    },

    updateArticuloManufacturado: async (id: number, categoriaArticuloManufacturado: CategoriaArticuloManufacturado): Promise<CategoriaArticuloManufacturado> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/CategoriaArticuloManufacturado/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(categoriaArticuloManufacturado)
        });

        const data = await response.json();
        return data;
    },

    

    deleteCategoriaArticuloManufacturado: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/CategoriaArticuloManufacturado/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
