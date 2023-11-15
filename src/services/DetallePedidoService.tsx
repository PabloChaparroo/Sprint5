import { detallesPedido } from "../types/detallesPedido";

const BASE_URL = 'https://elbuensabor-v1.onrender.com';

export const DetallePedidoService = {
    
    getAllDetallesPedido: async (): Promise<detallesPedido[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/pedidoproductos/paged`);
        const data = await response.json();
        return data;
    },

    getDetallePedido: async (id: number): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/pedidoproductos/${id}`);
        const data = await response.json();
        return data;
    },

    createDetallePedido: async (detallesPedido: detallesPedido): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/pedidoproductos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detallesPedido)
        });

        const data = await response.json();
        return data;
    },

    updateDetallePedido: async (id: number, detallePedido: detallesPedido): Promise<detallesPedido> => {
        const response = await fetch(`${BASE_URL}/api/v1/pedidoproductos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(detallePedido)
        });

        const data = await response.json();
        return data;
    },

    deleteDetallePedido: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/pedidoproductos/${id}`, {
            method: "DELETE"
        });
    }
}
