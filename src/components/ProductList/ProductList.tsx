import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { ArticuloManufacturadoService } from "../../services/ArticuloManufacturadoService";
import { ArticuloManufacturado } from "../../types/ArticuloManufacturado";

const ProductList = () => {
  const [articulosManufacturados, setArticulosManufacturados] = useState<ArticuloManufacturado[]>([]);

  useEffect(() => {
    const fetchArticulosManufacturados = async () => {
      try {
        const data = await ArticuloManufacturadoService.getAllArticuloManufacturado();
        setArticulosManufacturados(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching ArticulosManufacturados:", error);
      }
    };

    fetchArticulosManufacturados();
  }, []);

  return (
    <Container>
      <Row>
        {articulosManufacturados.map((articuloManufacturado) => (
          <ProductCard key={articuloManufacturado.id} articuloManufacturado={articuloManufacturado} />
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
