import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar expand="lg" className="navbar-dark bg-dark">
                <Container style={{ marginLeft: '50px' }}>
                    <Navbar.Brand onClick={() => navigate('/')}>
                        <img
                            src="src/assets/images/Logo.png"
                            alt="Logo"
                            style={{ height: 'auto', maxHeight: '40px' }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={() => navigate('/componentes')}> Carta </Nav.Link>
                            <NavDropdown title="Administración" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate('/unidad-de-medida')}>
                                    Unidad de medida
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/rubro')}>
                                    Rubro
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate('/administracion')}>
                                    Productos
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
