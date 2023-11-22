import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { NavDropdown } from 'react-bootstrap';

const Header = () => {
    const navigate = useNavigate();

    const neonEffectStyle = {
        color: 'white',
        textShadow: '0 0 5px white, 0 0 10px white, 0 0 20px white',
        textDecoration: 'none',
    };

    const handleLogin = () => {
        // Lógica para redirigir a la página de inicio de sesión
        navigate('/login');
    };

    const handleRegister = () => {
        // Lógica para redirigir a la página de registro
        navigate('/registro');
    };

    return (
        <>
            <Navbar expand="lg" className="navbar-dark bg-dark">
                <Container style={{}}>
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
                            <Nav.Link style={neonEffectStyle} onClick={() => navigate('/componentes')}>
                                Carta
                            </Nav.Link>
                            <NavDropdown title="Administración" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={() => navigate('/unidadMedidas')}>
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
                        <Nav className="ml-auto">
                            <Button variant="outline-light" onClick={handleLogin}>
                                Iniciar sesión
                            </Button>
                            <span className="mx-2"></span>
                            <Button variant="light" onClick={handleRegister}>
                                Registrarse
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
