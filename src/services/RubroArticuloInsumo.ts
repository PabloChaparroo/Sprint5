import { RubroArticuloInsumo } from "../types/RubroArticuloInsumo";

<<<<<<< HEAD
const BASE_URL = 'http://localhost:8080'; 
=======
const BASE_URL = 'https://fakestoreapi.com'; 
>>>>>>> 9a6edf1bf4345fefa6a140e799f0dc51c14b8667

export const RubroArticuloInsumoService = {

    getRubroArticuloInsumo: async (): Promise<RubroArticuloInsumo[]> => {
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/api/v1/rubros`); 
=======
        const response = await fetch(`${BASE_URL}/rubros`); 
>>>>>>> 9a6edf1bf4345fefa6a140e799f0dc51c14b8667
        const data = await response.json();
        return data;
    },

    getRubro: async (id: number): Promise<RubroArticuloInsumo> => {
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/api/v1/rubros/${id}`); 
=======
        const response = await fetch(`${BASE_URL}/rubros/${id}`); 
>>>>>>> 9a6edf1bf4345fefa6a140e799f0dc51c14b8667
        const data = await response.json();
        return data;
    },

    createRubroArticuloInsumo: async (rubro: RubroArticuloInsumo): Promise<RubroArticuloInsumo> => {
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/api/v1/rubros`, {
=======
        const response = await fetch(`${BASE_URL}/rubros`, {
>>>>>>> 9a6edf1bf4345fefa6a140e799f0dc51c14b8667
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
<<<<<<< HEAD
        const response = await fetch(`${BASE_URL}/api/v1/rubros/${id}`, {
=======
        const response = await fetch(`${BASE_URL}/rubros/${id}`, {
>>>>>>> 9a6edf1bf4345fefa6a140e799f0dc51c14b8667
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
<<<<<<< HEAD
        await fetch(`${BASE_URL}/api/v1/rubros/${id}`, {
=======
        await fetch(`${BASE_URL}/rubros/${id}`, {
>>>>>>> 9a6edf1bf4345fefa6a140e799f0dc51c14b8667
            method: "DELETE"
        });
    }
}
