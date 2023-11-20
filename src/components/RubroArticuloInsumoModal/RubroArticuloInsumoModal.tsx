import { useState, useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { toast } from 'react-toastify';

import { RubroArticuloInsumoService } from "../../services/RubroArticuloInsumo";
import { ModalType } from "../../types/ModalType";
import { RubroArticuloInsumo } from "../../types/RubroArticuloInsumo";
import { Calendar } from "react-bootstrap-icons";

type RubroArticuloInsumoModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  rubroArticuloInsumo: RubroArticuloInsumo;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const RubroArticuloInsumoModal: React.FC<RubroArticuloInsumoModalProps> = ({
  show,
  onHide,
  title,
  modalType,
  rubroArticuloInsumo,
  refreshData,
}) => {
    const [rubros, setRubros] = useState<RubroArticuloInsumo[]>([]);
    
    useEffect(() => {
      const fetchLists = async () => {
        try {
          const rubros = await RubroArticuloInsumoService.getRubroArticuloInsumo();
          setRubros(rubros);
           
        } catch (error) {
          console.error("Error fetching rubros and unidades de medida:", error);
        }
      };
  
      fetchLists();
    }, []);

  const formik = useFormik({
    initialValues: rubroArticuloInsumo,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (formData: RubroArticuloInsumo) => handleSave(formData),
  });

  const handleSave = async (formData: RubroArticuloInsumo) => {
    try {
      if (modalType === ModalType.CREATE) {
        await RubroArticuloInsumoService.createRubroArticuloInsumo(formData);
      } else if (modalType === ModalType.UPDATE) {
        await RubroArticuloInsumoService.updateRubroArticuloInsumo(formData.id!, formData);
      }

      toast.success(modalType === ModalType.CREATE ? "Rubro Articulo Insumo Creado" : "Rubro Articulo Insumo Actualizado", {
        position: "top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error("Error guardando rubro articulo insumo:", error);
      toast.error('Ha ocurrido un error');
    }
  };
  const handleDelete = async () => {
    try {
      if (rubroArticuloInsumo) {
        await RubroArticuloInsumoService.deleteRubroArticuloInsumo(rubroArticuloInsumo.id!);
        toast.success("Rubro articulo insumo eliminado con éxito", {
          position: "top-center",
        });
  
        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error deleting rubro articulo insumo:", error);
      toast.error("Ha ocurrido un error al eliminar el rubro articulo insumo");
    }
  };
  
  
  const handleRestore = async () => {
    try {
      // Restaurar la fecha de baja a null
      if (rubroArticuloInsumo) {
        rubroArticuloInsumo.fechaBaja = "";
        await RubroArticuloInsumoService.updateRubroArticuloInsumo(rubroArticuloInsumo.id!, rubroArticuloInsumo);
        toast.success("rubro articulo insumo restaurado con éxito", {
          position: "top-center",
        });
  
        // Resto del código para refrescar la lista de ingredientes, etc.
        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error restoring rubro articulo insumo:", error);
      toast.error("Ha ocurrido un error al restaurar el rubro articulo insumo");
    }
  };
  

  return (
    <>
    {modalType === ModalType.DELETE && (
      <Modal show={show} onHide={onHide} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p> ¿Está seguro que desea dar de baja el producto  
                <br /> <strong> {rubroArticuloInsumo.denominacion} </strong> ?
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                Dar de baja
            </Button>
        </Modal.Footer>
      </Modal>
    )}

    {modalType === ModalType.RESTORE && (
      <Modal show={show} onHide={onHide} centered backdrop="static">
         <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> ¿Está seguro que desea dar de alta el producto  
                <br /> <strong> {rubroArticuloInsumo.denominacion} </strong> ?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Cancelar
              </Button>
              <Button variant="success" onClick={handleRestore}>
                Dar de alta
              </Button>
            </Modal.Footer>
      </Modal>
    )}
    {modalType !== ModalType.DELETE && modalType !== ModalType.RESTORE && (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formDenominacion">
            <Form.Label>Denominacion</Form.Label>
            <Form.Control
              name="denominacion"
              type="text"
              value={formik.values.denominacion || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.denominacion && formik.touched.denominacion)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.denominacion}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formFechaAlta">
            <Form.Label>Fecha Alta</Form.Label>
            <Form.Control 
              name="fechaAlta"
              type="date"
              value={formik.values.fechaAlta?.toString() || ''}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={Boolean(formik.errors.fechaAlta && formik.touched.fechaAlta)}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.fechaAlta}
            </Form.Control.Feedback>
          </Form.Group>

    
          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" disabled={!formik.isValid}>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
    )};
    </>
  );
};

export default RubroArticuloInsumoModal;