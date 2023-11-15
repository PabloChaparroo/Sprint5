import { LoginRequest } from "../types/LoginRequest";

const BASE_URL = 'http://localhost:8080';

export const AuthService = {
  
  login: async (loginRequest: LoginRequest): Promise<string> => {

    try {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginRequest),
      });

      if (!response.ok) {
        throw new Error('Inicio de sesión fallido');
      }

      const { token } = await response.json();

      if (!token) {
        throw new Error('No se encontró el token');
      }


      localStorage.setItem('token', token);

      return token;

    } catch (error) {
      console.error('Error al iniciar sesión');
      throw error; 
    }
  },
};
