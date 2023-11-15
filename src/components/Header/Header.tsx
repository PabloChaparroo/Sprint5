import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar expand="lg" className="navbar-dark bg-dark">
                <Container style={{marginLeft: '50px'}}>
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
                            <Nav.Link onClick={() => navigate('/administracion')}> Pedidos </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
