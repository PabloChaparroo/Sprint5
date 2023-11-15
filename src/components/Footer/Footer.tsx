import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./Footer.module.css"; // Importa el archivo de estilos

const Footer = () => {
  return (
    <footer id="footer" className={`mt-auto py-3 ${styles.footer}`}>
      <Container>
        <Row>
          

          {/* Segunda columna con texto en el medio */}
          <Col md={2} xs={12} className="order-md-2 order-1">
            <h5>El buen sabor</h5>
            <p>No te arrepentiras</p>
            <div className={styles.textContainer}>
              <Link to="/">
                <FaFacebook size={30} />
              </Link>
              <Link to="/">
                <FaTwitter size={30} />
              </Link>
              <Link to="/">
                <FaInstagram size={30} />
              </Link>
            </div>
          </Col>

          {/* Tercera columna con texto en el medio */}
          <Col md={2} xs={12} className="order-md-3 order-3">
            <h5>HORARIOS</h5>
            <p>Lunes a viernes 08:00 a 23:00

            </p>
            <p>Sábados 09:00 a 14:00</p>
            <p>Domingos cerrado</p>
          </Col>

          {/* Cuarta columna con texto en el medio */}
          <Col md={2} xs={12} className="order-md-4 order-4">
            <h5>SUCURSALES</h5>
            <p>Términos y servicios</p>
        
          </Col>

          {/* Quinta columna con texto en el medio */}
          <Col md={4} xs={12} className="order-md-5 order-5">
            <h5>CONTACTENOS</h5>
            <p>+54 9 12236448</p>
            
          </Col>

          {/* Primera columna con imagen a la izquierda */}
          <Col md={2} xs={12} className="order-md-7 order-7">
            <img
              src="/public/images/Logo.png"
              alt="logo"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

