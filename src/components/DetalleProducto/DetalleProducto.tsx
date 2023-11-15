import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService";
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado";

const DetalleProducto: React.FC = () => {
  const { idProduct } = useParams();
  const [articuloManufacturado, setArticuloManufacturado] = useState<ArticuloManufacturado | null>(null);

  useEffect(() => {
    const fetchArticuloManufacturado = async () => {
      try {
        if (idProduct && !isNaN(parseInt(idProduct, 10))) {
          const articuloData = await ArticuloManufacturadoService.getArticuloManufacturado(parseInt(idProduct, 10));
          setArticuloManufacturado(articuloData);
          // You can add additional fetch calls or logic here if needed
        } else {
          console.error('Identificador de producto no válido');
        }
      } catch (error) {
        console.error('Error al cargar el producto:', error);
      }
    };

    fetchArticuloManufacturado();
  }, [idProduct]);

  if (!articuloManufacturado) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src={articuloManufacturado?.urlImagen_AM} alt={articuloManufacturado?.nombreArticuloManufacturado} className="card-img-top mb-5" />
        </div>

        <div className="col-12 col-md-6">
          <h1 className="display-5 fw-bolder">Titulo: {articuloManufacturado?.nombreArticuloManufacturado}</h1>
          <h5>Categoría: {articuloManufacturado?.categoriaArticuloManufacturado.nombreCategoriaArticuloManufacturado}</h5>
          <p className="lead">Descripción: {articuloManufacturado?.descripcionArticuloManufacturado}</p>
          <p className="lead">Precio: ${articuloManufacturado?.precioVenta}</p>
          {/* Add more details or components as needed */}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
