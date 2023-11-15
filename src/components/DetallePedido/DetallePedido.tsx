import React from "react";
import { Table, Button } from "react-bootstrap";
import { useCarrito } from "../CarritoProvider/CarritoProvider";
import { DetallePedidoService } from "../../services/DetallePedidoService"; 

//Creación del pedido
import { PedidoService } from "../../services/PedidoService";
import { ClienteService } from "../../services/ClienteService";

const DetallePedido: React.FC = () => {
  const { carrito, removeFromCart } = useCarrito();

  const handleRemoveFromCart = async (index: number, detalleId: number | undefined) => {
    if (detalleId) {
      await DetallePedidoService.deleteDetallePedido(detalleId);
    }
    removeFromCart(index);
  };


  //------------- CONFIRMAR PEDIDO --------------
  const handleConfirmarPedido = async () => {
    try {
      // Obtén el primer cliente del backend
      const listaClientes = await ClienteService.getAllClientes();
      const clienteObtenido = listaClientes.length > 0 ? listaClientes[1] : null;
  
      // Crea el pedido con los detalles actuales del carrito y el cliente obtenido
      const nuevoPedido = await PedidoService.createPedido({
        id: 0,
        fechaHoraPedido: new Date().toISOString(),
        fechaHoraModificacionPedido: null, // Agrega esta propiedad
        fechaHoraBajaPedido: null, // Agrega esta propiedad
        fechaHoraEstimadaFinalizacion: null, // Agrega esta propiedad
        totalPrecio: 0,
        totalCosto: 0,
        tipoEnvio: "Envío Estándar",
        formaPago: "Tarjeta de Crédito",
        estadoPedido: "En Proceso",
        cliente: clienteObtenido,
        domicilioEntrega: clienteObtenido?.domicilioList[0] ?? null,
        detallesPedido: carrito,
      });
  
      // Muestra un mensaje de éxito o realiza alguna acción adicional
      console.log("Pedido confirmado:", nuevoPedido);
  
      // Limpia el carrito después de confirmar el pedido
      // Esto dependerá de tu implementación específica en el servicio CarritoProvider
      // Puedes tener una función clearCart() o similar en tu contexto de carrito
      // y llamarla aquí.
    } catch (error) {
      console.error("Error al confirmar el pedido:", error);
    }
  };
  
  
  

  return (
    <div className="container mt-5">
      <h2>Carrito de Compras</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Subtotal</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.map((detalle, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{detalle.articuloManufacturado.nombreArticuloManufacturado}</td>
              <td>${detalle.articuloManufacturado.precioVenta}</td>
              <td>${detalle.subtotal}</td> {/* Nueva columna para el subtotal */}
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleRemoveFromCart(index, detalle.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button variant="success" onClick={handleConfirmarPedido}>
        Confirmar Pedido
      </Button>
    </div>
  );
};

export default DetallePedido;
