import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { UnidadMedida } from "../../types/UnidadMedida";
import { UnidadMedidaService } from "../../services/UnidadMedidaService";
import ModalUnidadMedida from "../ModalUnidadMedida/ModalUnidadMedida";


const AdminComponent: React.FC = () => {
  const [unidadMedida, setUnidadMedida] = useState<UnidadMedida[]>([]);

  const [unidadMedidaUpdate, setUnidadMedidaUpdate] = useState<UnidadMedida | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUnidadId, setSelectedUnidadId] = useState<number | null>(null);

  // ------- Traer todas las unidades de medida -------
  useEffect(() => {
    const fetchUnidadMedida = async () => {
      try {
        const data = await UnidadMedidaService.getAllUnidadMedida();
        setUnidadMedida(data);
        console.log(data);
      } catch (error) {
        console.error("error fetching unidades medida", error);
      }
    };

    fetchUnidadMedida();
  }, []);

  // ------- Mostrar el modal -------
  const handleAdd = () => {
    setShowModal(true);
  };

  // ------- Modificar una unidad de medida -------
const handleUpdate = async (id: number) => {
  try {
    // Obtiene los detalles de la unidad de medida por ID
    const unidadMedidaUpdate = await UnidadMedidaService.getUnidadMedida(id);
    
    // Establece los detalles en el estado del modal
    // (asegúrate de tener un estado en ModalUnidadMedida para almacenar los detalles)
    setUnidadMedidaUpdate(unidadMedidaUpdate);

    // Abre el modal
    setShowModal(true);
  } catch (error) {
    console.error("Error al obtener detalles de la unidad de medida", error);
  }
};

  // Borrar una unidad de medida
  const handleDelete = async (id: number) => {
    try {

      //Llamar al servicio para eliminarlo
      await UnidadMedidaService.deleteUnidadMedida(id);
      // Actualiza la lista de unidades de medida después de borrar
      const updatedUnidadMedida = unidadMedida.filter((unidad) => unidad.id !== id);
      setUnidadMedida(updatedUnidadMedida);
    } catch (error) {
      console.error("Error al borrar unidad de medida", error);
    }
  };

  // Cerrar el modal
  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Función para crear una nueva unidad de medida
  const handleCreate = async (unidadMedida: UnidadMedida) => {
    try {
      // Lógica para crear una nueva unidad de medida
      const nuevaUnidadMedida = await UnidadMedidaService.createUnidadMedida(unidadMedida);
      setUnidadMedida((prevUnidades) => [...prevUnidades, nuevaUnidadMedida]);
      handleCloseModal();
    } catch (error) {
      console.error("Error al crear nueva unidad de medida", error);
    }
  };

  return (
    <>
   
      {/*<h2>Bienvenido administrador </h2>*/}

      {/* Botones */}
      <Button onClick={handleAdd}>Añadir</Button>

      {/* Aquí puedes renderizar una tabla con las unidades de medida */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Abreviatura</th>
            <th>Fecha actual</th>
            <th>Acciones</th>
            {/* Otras columnas según tus necesidades */}
          </tr>
        </thead>
        <tbody>
          {unidadMedida.map((unidad) => (
            <tr key={unidad.id}>
              <td>{unidad.id}</td>
              <td>{unidad.nombreUnidadMedida}</td>
              <td>{unidad.abreviaturaUnidadMedida}</td>
              <td>{unidad.fechaAltaUnidadMedida}</td>
              <td>
                {/* Botones de acciones */}
                <Button onClick={() => handleUpdate(unidad.id)}  className="btn btn-warning" style={{ display: 'inline-block', marginRight: '10px' }}>Modificar</Button>
                <Button onClick={() => handleDelete(unidad.id)} className="btn btn-danger">Borrar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Renderiza el modal si showModal es true */}
      {showModal && (
        <ModalUnidadMedida
        showModal={showModal}
        handleClose={handleCloseModal}
        createUnidadMedida={handleCreate}
        unidadMedida={unidadMedida}
      />
      )}
    </>
  );
};

export default AdminComponent;
