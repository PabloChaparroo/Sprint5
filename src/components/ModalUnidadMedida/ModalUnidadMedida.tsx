import { Button, Form, Modal, Table } from "react-bootstrap";

//Dependencias para validar los formularios
import * as Yup from "yup";
import { useFormik } from "formik";

//Notificaciones al usuario
import { UnidadMedida } from "../../types/UnidadMedida";


//Recibe parametros como props para que se renderice, su titulo y según qué operación queremos realizar.
type UnidadMedidaModalProps = {
    showModal: boolean;
    handleClose: () => void;
    createUnidadMedida: (unidadMedida: UnidadMedida) => void;
    unidadMedida: UnidadMedida[]; // Agrega la prop unidadMedida
  };

const ModalUnidadMedida: React.FC<UnidadMedidaModalProps> = ({showModal,handleClose,createUnidadMedida}) => {

    const validationSchema = Yup.object({
        id: Yup.number().required('Este campo es obligatorio'),
        nombreUnidadMedida: Yup.string().required('Este campo es obligatorio'),
        abreviaturaUnidadMedida: Yup.string().required('Este campo es obligatorio'),
        fechaAltaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
        fechaBajaUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),
        fechaModificacionUnidadMedida: Yup.string().nullable().required('Este campo es obligatorio'),        
    });
    
    const formik = useFormik({
        initialValues: {
            id: 0,
            nombreUnidadMedida: '',
            abreviaturaUnidadMedida: '',
            fechaAltaUnidadMedida: '',
            fechaBajaUnidadMedida: '',
            fechaModificacionUnidadMedida: '',
        },

        validationSchema: validationSchema,

        onSubmit: async (values) => {
            console.log('(antes del service)Datos de la unidad creada:', JSON.stringify(values));

            await createUnidadMedida(values);
            handleClose();
        },
    })

  return (
  
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Unidad de Medida</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Abreviatura</th>
                <th>Fecha Alta</th>
                <th>Fecha Baja</th>
                <th>Fecha Modificación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Form.Control
                    type="text"
                    name="nombreUnidadMedida"
                    value={formik.values.nombreUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.nombreUnidadMedida && !!formik.errors.nombreUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.nombreUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="abreviaturaUnidadMedida"
                    value={formik.values.abreviaturaUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.abreviaturaUnidadMedida && !!formik.errors.abreviaturaUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.abreviaturaUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaAltaUnidadMedida"
                    value={formik.values.fechaAltaUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaAltaUnidadMedida && !!formik.errors.fechaAltaUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaAltaUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaBajaUnidadMedida"
                    value={formik.values.fechaBajaUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaBajaUnidadMedida && !!formik.errors.fechaBajaUnidadMedida}
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaBajaUnidadMedida}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaModificacionUnidadMedida"
                    value={formik.values.fechaModificacionUnidadMedida}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.fechaModificacionUnidadMedida && !!formik.errors.fechaModificacionUnidadMedida
                    }
                  />
                  <Form.Control.Feedback type="invalid">
                    {formik.errors.fechaModificacionUnidadMedida}
                  </Form.Control.Feedback>
                </td>
              </tr>
            </tbody>
          </Table>
          <Button type="submit">Agregar</Button>
        </Form>
      </Modal.Body>
    </Modal>
  
  
  );



};

export default ModalUnidadMedida;
