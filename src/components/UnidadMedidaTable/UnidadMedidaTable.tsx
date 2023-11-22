import { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import ModalUnidadMedida from "../UnidadDeMedidaModal/ModalUnidadMedida";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";
import { UnidadMedidaService } from "../../services/UnidadMedidaService";
import { UnidadMedida } from "../../types/UnidadMedida";

const UnidadMedidaTable = () => {
  const [medidas, setMedidas] = useState<UnidadMedida[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
  const [title, setTitle] = useState("");

  const initializeNewMedida = (): UnidadMedida => {
    return {
      id: 0,
      denominacion: "",
      abreviatura: "",
      fechaAlta: new Date(),
      fechaModificacion: new Date(),
      fechaBaja: new Date(),
    };
  };

  const [medida, setMedida] = useState<UnidadMedida>(initializeNewMedida);

  useEffect(() => {
    const fetchMedidas = async () => {
      const medidas = await UnidadMedidaService.getAllUnidadMedida();
      setMedidas(medidas);
      setIsLoading(false);
    };

    fetchMedidas();
  }, [refreshData]);

  const handleClick = (newTitle: string, medida: UnidadMedida, modal: ModalType) => {
    setTitle(newTitle);
    setModalType(modal);
    setMedida(medida);
    setShowModal(true);
  };

  return (
    <div className="m-3">
      <Button onClick={() => handleClick("Nueva Medida", initializeNewMedida(), ModalType.CREATE)}>
        Nueva Medida
      </Button>

      {isLoading ? (<Loader />) : (
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Denominación</th>
              <th>Abreviatura</th>
              <th>Fecha Alta</th>
              <th>Fecha Modificación</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {medidas.map((medida) => (
              <tr key={medida.id}>
                <td>{medida.id}</td>
                <td>{medida.denominacion}</td>
                <td>{medida.abreviatura}</td>
                <td>{medida.fechaAlta ? new Date(medida.fechaAlta).toLocaleDateString() : ""}</td>
                <td>{medida.fechaModificacion ? new Date(medida.fechaModificacion).toLocaleDateString() : ""}</td>
                <td><EditButton onClick={() => handleClick("Editar medida", medida, ModalType.UPDATE)} /></td>
                <td><DeleteButton onClick={() => handleClick("Borrar medida", medida, ModalType.DELETE)} /></td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}

      {showModal && (
        <ModalUnidadMedida
          show={showModal}
          onHide={() => setShowModal(false)}
          title={title}
          modalType={modalType}
          unidadMedida={medida}
          refreshData={setRefreshData}
        />
      )}
    </div>
  );
};

export default UnidadMedidaTable;
