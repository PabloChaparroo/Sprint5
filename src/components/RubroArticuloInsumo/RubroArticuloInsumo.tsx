import { useEffect, useState } from "react";
import { RubroArticuloInsumo } from "../../types/RubroArticuloInsumo";
import { RubroArticuloInsumoService } from "../../services/RubroArticuloInsumo";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import RubroArticuloInsumoModal from "../RubroArticuloInsumoModal/RubroArticuloInsumoModal";
import { EditButton } from "../EditButton/EditButton";
import { DeleteButton } from "../DeleteButton/DeleteButton";

const RubroArticuloInsumoTable = () => {
    const [rubros, setRubros] = useState<RubroArticuloInsumo[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [refreshData, setRefreshData] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState("");
    
    // Declaración de la función antes de su uso en el estado inicial
    const initializeNewRubro = (): RubroArticuloInsumo => {
        return {
            id: 0,
            denominacion: "",
        };
    };

    // Utilizando la función en el estado inicial
    const [rubro, setRubro] = useState<RubroArticuloInsumo>(initializeNewRubro);

    useEffect(() => {
        const fetchRubros = async () => {
            const rubros = await RubroArticuloInsumoService.getRubros();
            setRubros(rubros);
            setIsLoading(false);
        };

        fetchRubros();
    }, [refreshData]);

    const handleClick = (newTitle: string, rubro: RubroArticuloInsumo, modal: ModalType) => {
        setTitle(newTitle);
        setModalType(modal)
        setRubro(rubro);
        setShowModal(true);
    };

    return (
        <div className="m-3">
            <Button onClick={() => handleClick("Nuevo Rubro", initializeNewRubro(), ModalType.CREATE)}>
                Nuevo Rubro
            </Button>

            {isLoading ? <Loader /> : (
                <Table>
                    <thead>
                        <tr>
                            <th>Denominación</th>
                            <th>Fecha Alta</th>
                            <th>Editar</th>
                            <th>Borrar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rubros.map(rubro => (
                            <tr key={rubro.id}>
                                <td>{rubro.denominacion}</td>
                                <td><EditButton onClick={() => handleClick("Editar rubro", rubro, ModalType.UPDATE)} /></td>
                                <td><DeleteButton onClick={() => handleClick("Borrar rubro", rubro, ModalType.DELETE)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}

            {showModal && (
                <RubroArticuloInsumoModal
                    show={showModal}
                    onHide={() => setShowModal(false)}
                    title={title}
                    modalType={modalType}
                    rubroArticuloInsumo={rubro}
                    refreshData={setRefreshData}
                />
            )}
        </div>
    );
}

export default RubroArticuloInsumoTable;
