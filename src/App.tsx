import { CarritoProvider } from "./components/CarritoProvider/CarritoProvider";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import './App.css';
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { Suspense } from "react";
import Loader from "./components/Loader/Loader";


const App = () => {
  return (
    <Router>
      <CarritoProvider>
        <Header />
        
           
        <AppRoutes />
        <Footer />
      </CarritoProvider>
    </Router>
  );
};

export default App;
