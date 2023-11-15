import React, { useEffect, useState } from "react";
import { Table, Container } from "react-bootstrap";
import { ClienteDTO } from "../../types/ClienteDTO";
import { ClienteService } from "../../services/ClienteService";

const ShowProfileComponent: React.FC = () => {
  const [profileData, setProfileData] = useState<ClienteDTO | null>(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const data = await ClienteService.showProfile();
        setProfileData(data);
        console.log("Datos del DTOCliente:", data);
      } catch (error) {
        console.error("Error al recuperar el perfil");
      }
    };

    fetchProfileData();
  }, []);

  return (
    <Container>
      <h2 className="mt-3 mb-4">Perfil del Cliente</h2>
      {profileData ? (
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td>Nombre de usuario</td>
              <td>{profileData.username}</td>
            </tr>
            <tr>
              <td>Nombre</td>
              <td>{profileData.nombre}</td>
            </tr>
            <tr>
              <td>Apellido</td>
              <td>{profileData.apellido}</td>
            </tr>
            <tr>
              <td>Teléfono</td>
              <td>{profileData.telefono}</td>
            </tr>
            <tr>
              <td>Correo electrónico</td>
              <td>{profileData.mail}</td>
            </tr>
            {/* Puedes agregar más filas según los detalles que desees mostrar */}
          </tbody>
        </Table>
      ) : (
        <p>Cargando datos del perfil...</p>
      )}
    </Container>
  );
};

export default ShowProfileComponent;
