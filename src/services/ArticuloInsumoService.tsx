import { ArticuloInsumo } from "../types/ArticuloInsumo";


const BASE_URL = 'https://elbuensabor-v1.onrender.com';

export const ArticuloInsumoService = {

    
    getAllArticuloInsumo: async (): Promise<ArticuloInsumo[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/articuloInsumos/paged`);
        const data = await response.json();
        return data.contect;
    },

    
    getArticuloInsumo: async (id:number): Promise<ArticuloInsumo> => {

        const response = await fetch (`${BASE_URL}/api/v1/articuloInsumos/${id}`);
        const data = await response.json();
        return data;
        
    },

    createArticuloInsumo:async (articuloInsumo:ArticuloInsumo):Promise<ArticuloInsumo> => {

        const response = await fetch(`${BASE_URL}/api/v1/articuloInsumos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;
        
    },

    updateArticuloInsumo: async (id: number, articuloInsumo: ArticuloInsumo): Promise<ArticuloInsumo> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/articuloInsumos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;
    },

    

    deleteArticuloInsumo: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/articuloInsumos/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
