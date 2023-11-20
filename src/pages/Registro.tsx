import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form, Container, Button } from 'react-bootstrap';
import { AuthService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const FormRegister: React.FC = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    username: Yup.string().required('El nombre de usuario es requerido'),
    password: Yup.string()
      .required('La contraseña es requerida')
      .min(6, 'La contraseña debe tener al menos 6 caracteres'),
    confirmPassword: Yup.string()
      .required('Confirma tu contraseña')
      .oneOf([Yup.ref('password')], 'Las contraseñas deben coincidir'),
  });
  
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  
    validationSchema: validationSchema,
  
    onSubmit: async (values) => {
      try {
        const response = await AuthService.register(values);
        console.log('Registro exitoso:', response);
        navigate('/');
        toast.success('Registro exitoso');
      } catch (error) {
        console.error('Error al registrarse:', error);
      }
    },
  });

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '70vh' }}>
        <Form onSubmit={formik.handleSubmit} className="w-80 p-4 border">
          <div className="mb-3 mt-1">
            <label htmlFor="username" className="form-label" style={{ color: 'white' }}>
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
            <label htmlFor="password" className="form-label" style={{ color: 'white' }}>
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

          <div className="mb-3 mt-1">
            <label htmlFor="confirmPassword" className="form-label" style={{ color: 'white' }}>
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />

            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <div className="text-danger"> {formik.errors.confirmPassword} </div>
            ) : null}
          </div>

          <div className="text-end">
            <Button className="px-5" variant="primary" type="submit">
              Registrarse
            </Button>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default FormRegister;