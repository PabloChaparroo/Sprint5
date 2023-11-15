import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Container, Button } from "react-bootstrap";
import { AuthService } from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const FormLogin: React.FC = () => {
  const navigate = useNavigate();


  // YUP - Esquema de validación
  const validationSchema = Yup.object({
    username: Yup.string().required("El nombre de usuario es requerido"),
    password: Yup.string().required("La contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      
    },

    validationSchema: validationSchema,

    onSubmit: async (values) => {
      try {
        const token = await AuthService.login(values);
        console.log("Inicio de sesión exitoso. Token:", token);
        navigate('/');
        toast.success('Inicio de sesión exitoso');
      } catch (error) {
        console.error("Error al iniciar sesión:");
      }
    },
  });

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "70vh" }}
      >
        <Form onSubmit={formik.handleSubmit} className="w-80 p-4 border">
       
          <div className="mb-3 mt-1">
            <label htmlFor="username" className="form-label" style={{ color: 'White' }}>
              Usuario
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />

            {formik.touched.username && formik.errors.username ? (
              <div className="text-danger"> {formik.errors.username} </div>
            ) : null}
          </div>

      
          <div className="mb-3 mt-1">
            <label htmlFor="password" className="form-label" style={{ color: 'White' }}>
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />

            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger"> {formik.errors.password} </div>
            ) : null}
          </div>

          <div className="text-end">
            <Button className="px-5" variant="primary" type="submit">
              Enviar
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormLogin;
