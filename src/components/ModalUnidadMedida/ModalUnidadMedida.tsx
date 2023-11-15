import { Button, Form, Modal, Table } from "react-bootstrap";

import * as Yup from "yup";
import { useFormik } from "formik";

import { UnidadMedida } from "../../types/UnidadMedida";


//Recibe parametros como props para que se renderice, su titulo y según qué operación queremos realizar.
type UnidadMedidaModalProps = {
    showModal: boolean;
    handleClose: () => void;
    createUnidadMedida: (unidadMedida: UnidadMedida) => void;
    unidadMedida: UnidadMedida[];
  };

const ModalUnidadMedida: React.FC<UnidadMedidaModalProps> = ({showModal,handleClose,createUnidadMedida}) => {

    const validationSchema = Yup.object({
        id: Yup.number().required('Este campo es obligatorio'),
        denominacion: Yup.string().required('Este campo es obligatorio'),
        abreviatura: Yup.string().required('Este campo es obligatorio'),
        fechaAlta: Yup.string().nullable().required('Este campo es obligatorio'),
        fechaBaja: Yup.string().nullable().required('Este campo es obligatorio'),
        fechaModificacion: Yup.string().nullable().required('Este campo es obligatorio'),        
    });
    
    const formik = useFormik({
        initialValues: {
            id: 0,
            denominacion: '',
            abreviatura: '',
            fechaAlta: '',
            fechaBaja: '',
            fechaModificacion: '',
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
      <Modal.Header closeButton  style={{ backgroundColor: 'lightblue', color: 'blue', fontSize: '20px', borderBottom: '1px solid blue' }}>
        <Modal.Title>Unidad de Medida</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Denominacion</th>
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
                    name="denominacion"
                    value={formik.values.denominacion}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.denominacion && !!formik.errors.denominacion}
                    style={{ borderRadius: "5px", borderColor: "#007bff" }}
                    
                 />
                  <Form.Control.Feedback type="invalid"
                  style={{ color: 'red', fontSize: '14px' }}
                  >{formik.errors.denominacion}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="abreviatura"
                    value={formik.values.abreviatura}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.abreviatura && !!formik.errors.abreviatura}
                    style={{ borderRadius: "5px", borderColor: "#007bff" }}
                    
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.abreviatura}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaAlta"
                    value={formik.values.fechaAlta}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaAlta && !!formik.errors.fechaAlta}
                    style={{ borderRadius: "5px", borderColor: "#007bff" }}
                    
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaAlta}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaBaja"
                    value={formik.values.fechaBaja}
                    onChange={formik.handleChange}
                    isInvalid={formik.touched.fechaBaja && !!formik.errors.fechaBaja}
                    style={{ borderRadius: "5px", borderColor: "#007bff" }}
                    
                  />
                  <Form.Control.Feedback type="invalid">{formik.errors.fechaBaja}</Form.Control.Feedback>
                </td>
                <td>
                  <Form.Control
                    type="text"
                    name="fechaModificacion"
                    value={formik.values.fechaModificacion}
                    onChange={formik.handleChange}
                    isInvalid={
                      formik.touched.fechaModificacion && !!formik.errors.fechaModificacion}
                      style={{ borderRadius: "5px", borderColor: "#007bff" }}
                      
                  />
                  <Form.Control.Feedback type="invalid" style={{ color: 'red', fontSize: '14px' }}>
                    {formik.errors.fechaModificacion}
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
