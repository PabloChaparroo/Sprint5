import { UnidadMedida } from "../types/UnidadMedida";


const BASE_URL = 'http://localhost:8080';

export const UnidadMedidaService = {

    
    getAllUnidadMedida: async (): Promise<UnidadMedida[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedidas`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },  
        });
        const data = await response.json();
        return data;
    },

    
    getUnidadMedida: async (id:number): Promise<UnidadMedida> => {

        const response = await fetch (`${BASE_URL}/api/v1/unidadMedidas/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },  
        });
        const data = await response.json();
        return data;
        
    },

    createUnidadMedida:async (unidadMedida:UnidadMedida):Promise<UnidadMedida> => {

        const response = await fetch(`${BASE_URL}/api/v1/unidadMedidas`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },
            body: JSON.stringify(unidadMedida)
        });

        const data = await response.json();
        return data;
        
    },

    updateUnidadMedida: async (id: number, unidadMedida:UnidadMedida): Promise<UnidadMedida> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/unidadMedidas/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },
            body: JSON.stringify(unidadMedida)
        });

        const data = await response.json();
        return data;
    },

    

    deleteUnidadMedida: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/unidadMedidas/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(window.localStorage.getItem("authData")!)}`,
            },
        
        });
    }
    

  
}
