import { Cliente } from "../types/Cliente";


const BASE_URL = 'https://elbuensabor-v1.onrender.com';

export const ClienteService = {
    getAllClientes: async (): Promise<Cliente[]> => {
        const response = await fetch(`${BASE_URL}/api/v1/clientes/paged`);
        const data = await response.json();
        return data;
    },

    getCliente: async (id: number): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL}/api/v1/clientes/${id}`);
        const data = await response.json();
        return data;
    },

    createCliente: async (cliente: Cliente): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL}/api/v1/clientes`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        const data = await response.json();
        return data;
    },

    updateCliente: async (id: number, cliente: Cliente): Promise<Cliente> => {
        const response = await fetch(`${BASE_URL}/api/v1/clientes/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cliente)
        });

        const data = await response.json();
        return data;
    },

    deleteCliente: async (id: number): Promise<void> => {
        await fetch(`${BASE_URL}/api/v1/clientes/${id}`, {
            method: "DELETE"
        });
    },

    showProfile: async (): Promise<Cliente> => {
        try {
            // Recuperar el token del localStorage
            const token = localStorage.getItem('token');
    
            const response = await fetch(`${BASE_URL}/api/v1/clientes/showProfile`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });
    
            if (!response.ok) {
                throw new Error('Error al recuperar datos');
            }
    
            const data = await response.json();
            console.log('Datos recuperados:', data);
    
            return data;
    
        } catch (error) {
            console.error('Error al recuperar datos');
            throw error;
        }
    }
    
    

   
      
};
