import { RubroArticuloInsumo } from "../types/RubroArticuloInsumo";

const BASE_URL = 'http://localhost:8080/api'; 

export const RubroArticuloInsumoService = {

    getRubroArticuloInsumo: async (): Promise<RubroArticuloInsumo[]> => {
        const response = await fetch(`${BASE_URL}/v1/rubros`); 
        const data = await response.json();
        return data;
    },

    getRubro: async (id: number): Promise<RubroArticuloInsumo> => {
        const response = await fetch(`${BASE_URL}/v1/rubros/${id}`); 
        const data = await response.json();
        return data;
    },

    createRubroArticuloInsumo: async (rubro: RubroArticuloInsumo): Promise<RubroArticuloInsumo> => {
        const response = await fetch(`${BASE_URL}/v1/rubros`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubro)
        });

        const data = await response.json();
        return data;
    },

    updateRubroArticuloInsumo: async (id: number, rubro: RubroArticuloInsumo): Promise<RubroArticuloInsumo> => {
        const response = await fetch(`${BASE_URL}/v1/rubros/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(rubro)
        });

        const data = await response.json();
        return data;
    },

    deleteRubroArticuloInsumo: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/v1/rubros/${id}`, {
            method: "DELETE"
        });
    }
}
