import { DetalleArticuloManufacturado } from "../types/DetalleArticuloManufacturado";

const BASE_URL = 'https://elbuensabor-v1.onrender.com';

export const DetalleArticuloManufacturadoService = {

    getAllDetalleArticuloManufacturado: async (): Promise<DetalleArticuloManufacturado[]> => {
       
        const response = await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturados/paged`);
        const data = await response.json();
        return data;
    },

    getDetalleArticuloManufacturado: async (id: number): Promise<DetalleArticuloManufacturado> => {

        const response = await fetch (`${BASE_URL}/api/v1/detalleArticuloManufacturados/${id}`);
        const data = await response.json();
        return data;
    },

    createDetalleArticuloManufacturado: async (detalleArticuloManufacturado: DetalleArticuloManufacturado): Promise<DetalleArticuloManufacturado> => {

        const response = await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturados`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detalleArticuloManufacturado)
        });

        const data = await response.json();
        return data;
    },

    updateDetalleArticuloManufacturado: async (id: number, detalleArticuloManufacturado: DetalleArticuloManufacturado): Promise<DetalleArticuloManufacturado> => {
        
        const response = await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturados/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(detalleArticuloManufacturado)
        });

        const data = await response.json();
        return data;
    },

    deleteDetalleArticuloManufacturado: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/detalleArticuloManufacturados/${id}`, {
            method: "DELETE"
        });
    }
};
