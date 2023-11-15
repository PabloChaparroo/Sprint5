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

      // Recuperar el token del cuerpo de la respuesta JSON
      const { token } = await response.json();

      if (!token) {
        throw new Error('No se encontró el token en las cabeceras de la respuesta');
      }

      // Almacena el token en localStorage
      localStorage.setItem('token', token);

      // Puedes también almacenar otros datos relacionados con la sesión si es necesario
      // localStorage.setItem('username', loginRequest.username);

      // Devolver el token como un string
      return token;

    } catch (error) {
      console.error('Error al iniciar sesión:');
      throw error; // Re-lanza el error para que pueda ser manejado por el código que llama a esta función
    }
  },
};
