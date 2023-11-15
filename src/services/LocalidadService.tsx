import { Localidad } from "../types/Localidad";

const BASE_URL = 'https://sprint5-back-seguridad.onrender.com';

export const LocalidadService = {
    getAllLocalidades: async (): Promise<Localidad[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/localidad/paged`);
        const data = await response.json();
        return data;
    },

    getLocalidad: async (id: number): Promise<Localidad> => {
        const response = await fetch(`${BASE_URL}/api/v1/localidad/${id}`);
        const data = await response.json();
        return data;
    },

    createLocalidad: async (localidad: Localidad): Promise<Localidad> => {
        const response = await fetch(`${BASE_URL}/api/v1/localidad`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localidad)
        });

        const data = await response.json();
        return data;
    },

    updateLocalidad: async (id: number, localidad: Localidad): Promise<Localidad> => {
        const response = await fetch(`${BASE_URL}/api/v1/localidad/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(localidad)
        });

        const data = await response.json();
        return data;
    },

    deleteLocalidad: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/localidad/${id}`, {
            method: "DELETE"
        });
    }
};
