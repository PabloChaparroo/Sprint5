import { Container, Row, Col, Nav, Form, FormControl, Button } from "react-bootstrap";
import { FaHamburger, FaPizzaSlice, FaCocktail, FaHotdog, FaBreadSlice, FaSearch, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './CategoriaSelector.css' 

const CategoriasSelector = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-body-tertiary p-3 categorias-selector" style={{ border: '1px solid #dee2e6', borderRadius: '5px' }}>
      <Container>
        <Row className="align-items-center">

          {/* Botones de categorías en el medio */}
          <Col md={8} className="d-flex justify-content-center mb-2">
            <Nav className="d-flex justify-content-center">
              <Nav.Link href="#hamburguesas"><FaHamburger /> Hamburguesas</Nav.Link>
              <Nav.Link href="#papas"><FaBreadSlice /> Papas</Nav.Link>
              <Nav.Link href="#pizzas"><FaPizzaSlice /> Pizzas</Nav.Link>
              <Nav.Link href="#panchos"><FaHotdog /> Panchos</Nav.Link>
              <Nav.Link href="#bebidas"><FaCocktail /> Bebidas</Nav.Link>
            </Nav>
          </Col>

          {/* Carrito al final a la derecha */}
          <Col md={2} className="d-flex justify-content-end mb-2">
            <Nav>
              <Nav.Link onClick={() => navigate('/detallePedido')}><FaShoppingCart /> Carrito</Nav.Link>
            </Nav>
          </Col>
          
           {/* Barra de búsqueda al inicio */}
           <Col md={2} className="mb-2 d-flex align-items-center">
            <Form className="d-flex">
              <FormControl type="text" placeholder="Buscar" size="sm" />
              <Button variant="light"><FaSearch /></Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategoriasSelector;
