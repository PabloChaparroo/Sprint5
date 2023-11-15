import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ClienteService } from "../../services/ClienteService";
import { toast } from 'react-toastify';

const Header = () => {
  // Utils
  const navigate = useNavigate();

  // Handlers
  const onShowProfile = async () => {
    try {
      const profileData = await ClienteService.showProfile();

      navigate("/showProfile");

      console.log("Profile Data:", profileData);
    } catch (error) {
      console.error("Error retrieving profile data:", error);
    }
  };



  const handleLogout = () => {
    // Eliminar el token del localStorage al hacer clic en el botón "Log Out"
    localStorage.removeItem("token");
    navigate('/');
    toast.success('Cierre de sesión exitoso');
  };

  return (
    <Row className="align-items-center">
      <Col md={4}>
        
              <img
                alt=""
                src="/images/Logo.png"    //Logo el Buen Sabor
                width="130"
                height="80"
                className="d-inline-block align-top"
              />
      </Col>

      <Col md={4} className="d-flex justify-content-center">
        <Navbar expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate("/")} style={{ color: 'white' }}>Inicio</Nav.Link >
              
          

          
              {localStorage.getItem("token") && (
                <Nav.Link onClick={onShowProfile}>ShowProfile</Nav.Link>
              )}

              <Nav.Link onClick={() => navigate("/admin")} style={{ color: 'white' }}>Admin</Nav.Link>

              {/* Botón de Log Out */}
              {localStorage.getItem("token") && (
                <Nav.Link onClick={handleLogout}>Log out</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>

      <Col md={4} className="d-flex justify-content-end">
        <Navbar expand="lg">
          
          <Nav>
            <Button
              className="btn btn-danger"
              onClick={() => navigate("/register")}
              style={{ backgroundColor: 'blue', color: 'white' }}
            >
              Registrarse
            </Button>
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate("/login")} style={{ color: 'white' }} >
              Iniciar sesión
            </Nav.Link>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
