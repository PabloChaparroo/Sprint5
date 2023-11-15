import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado";
import { useCarrito } from "../CarritoProvider/CarritoProvider";
import { detallesPedido } from "../../types/detallesPedido"; // Importa detallesPedido

const ProductCard: React.FC<{ articuloManufacturado: ArticuloManufacturado }> = ({ articuloManufacturado }) => {
  const navigate = useNavigate();
  const { addToCart } = useCarrito();

  const handleAddToCart = () => {
    // Aquí estamos creando un objeto detallesPedido antes de agregarlo al carrito
    const detalle: detallesPedido = {
      id: 0, // Puedes asignar un valor único o dejar que el backend lo maneje
      cantidad: 1, // Cantidad inicial, puedes ajustarla según tus necesidades
      subtotal: articuloManufacturado.precioVenta,
      subTotalCosto: 0, // Ajusta según tu lógica
      articuloManufacturado,
    };

    addToCart(detalle);
    console.log("Nuevo carrito:", detalle, "Agregado al carrito");
  };

  if (!articuloManufacturado) {
    return null;
  }

  const {
    nombreArticuloManufacturado,
    precioVenta,
    urlImagen_AM,
    categoriaArticuloManufacturado,
  } = articuloManufacturado;

  return (
    <Col xs={12} md={6} lg={4}>
      <Card style={{ width: "18rem", margin: "10px" }}>
        <Card.Img variant="top" src={urlImagen_AM} alt={nombreArticuloManufacturado} />
        <Card.Body>
          <Card.Title>{nombreArticuloManufacturado}</Card.Title>
          <Card.Text>
            Precio: ${precioVenta}
            <br />
            Categoría: {categoriaArticuloManufacturado.nombreCategoriaArticuloManufacturado}
          </Card.Text>
          <Button variant="primary" onClick={() => navigate(`/detalle/${articuloManufacturado.id}`)}>
            Ver más
          </Button>
          <Button variant="success" className="ms-2" onClick={handleAddToCart}>
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
