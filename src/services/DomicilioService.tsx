import { Domicilio } from "../types/Domicilio";

const BASE_URL = 'https://elbuensabor-v1.onrender.com';

export const DomicilioService = {
    getAllDomicilios: async (): Promise<Domicilio[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/domicilios/paged`);
        const data = await response.json();
        return data;
    },

    getDomicilio: async (id: number): Promise<Domicilio> => {
        const response = await fetch(`${BASE_URL}/api/v1/domicilios/${id}`);
        const data = await response.json();
        return data;
    },

    createDomicilio: async (domicilio: Domicilio): Promise<Domicilio> => {
        const response = await fetch(`${BASE_URL}/api/v1/domicilios`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(domicilio)
        });

        const data = await response.json();
        return data;
    },

    updateDomicilio: async (id: number, domicilio: Domicilio): Promise<Domicilio> => {
        const response = await fetch(`${BASE_URL}/api/v1/domicilios/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(domicilio)
        });

        const data = await response.json();
        return data;
    },

    deleteDomicilio: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/domicilios/${id}`, {
            method: "DELETE"
        });
    }
};
