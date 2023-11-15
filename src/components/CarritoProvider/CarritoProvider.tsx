import React, { createContext, useContext, useState, ReactNode } from "react";
import { detallesPedido } from "../../types/detallesPedido";
import { DetallePedidoService } from "../../services/DetallePedidoService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface CarritoContextProps {
  carrito: detallesPedido[];
  addToCart: (detalle: detallesPedido) => void;
  removeFromCart: (index: number) => void;
}

const CarritoContext = createContext<CarritoContextProps | undefined>(undefined);

interface CarritoProviderProps {
  children: ReactNode;
}

export const CarritoProvider: React.FC<CarritoProviderProps> = ({ children }) => {
  const [carrito, setCarrito] = useState<detallesPedido[]>([]);

  // Agregar al carrito
  const addToCart = async (detalle: detallesPedido) => {
    try {
      // Realiza la solicitud al backend para crear el nuevo detalle
      const nuevoDetalle = await DetallePedidoService.createDetallePedido(detalle);

      // Actualiza el estado local del carrito
      setCarrito((prevCarrito) => [...prevCarrito, nuevoDetalle]);

      toast.success("Se ha agregado un nuevo artículo al carrito.");
    } catch (error) {
      console.error("Error al agregar al carrito:", error);
      toast.error("Hubo un error al agregar al carrito.");
    }
  };

  // Eliminar del carrito
  const removeFromCart = async (index: number) => {
    try {
      // Obtiene el ID del detalle a eliminar
      const detalleId = carrito[index].id;

      // Realiza la solicitud al backend para eliminar el detalle
      await DetallePedidoService.deleteDetallePedido(detalleId);

      // Actualiza el estado local del carrito eliminando el detalle
      setCarrito((prevCarrito) => prevCarrito.filter((_, i) => i !== index));

      toast.error("Se ha eliminado un artículo del carrito.");
    } catch (error) {
      console.error("Error al eliminar del carrito:", error);
      toast.error("Hubo un error al eliminar del carrito.");
    }
  };

  return (
    <CarritoContext.Provider value={{ carrito, addToCart, removeFromCart }}>
      {children}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover draggable />
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error("useCarrito debe ser utilizado dentro de un CarritoProvider");
  }
  return context;
};
