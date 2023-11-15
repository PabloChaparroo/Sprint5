import { Rubro } from "../types/Rubro";


const BASE_URL = 'https://elbuensabor-v1.onrender.com';

export const RubroService = {

    
    getAllRubro: async (): Promise<Rubro[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/rubros`);
        const data = await response.json();
        return data;
    },

    
    getRubro: async (id:number): Promise<Rubro> => {

        const response = await fetch (`${BASE_URL}/api/v1/rubros/${id}`);
        const data = await response.json();
        return data;
        
    },

    createRubro:async (rubro:Rubro):Promise<Rubro> => {

        const response = await fetch(`${BASE_URL}/api/v1/rubros`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubro)
        });

        const data = await response.json();
        return data;
        
    },

    updateRubro: async (id: number, rubro:Rubro): Promise<Rubro> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/rubros/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(rubro)
        });

        const data = await response.json();
        return data;
    },

    

    deleteRubro: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/rubro/${id}`, {
            method: "DELETE"
        });
    }
    

  
}
