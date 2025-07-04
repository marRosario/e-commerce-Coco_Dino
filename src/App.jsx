import { useContext } from 'react';
import { CarritoContext } from './contexts/CarritoContexts';
import { useAuth } from "./contexts/context"; 
import Home from './layouts/Home'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProductosContainer from './componentes/ProductosContainer';
import Carrito from './componentes/carrito';
import Footer from './componentes/footer';
import Header from './componentes/header';
import Informacion from './componentes/Informacion';
import Contacto from './componentes/Contacto';
import ProductoDetalle from './componentes/ProductoDetalle';
import LoginRegistrarse from './componentes/LoginRegistrarse';
import Admin from './componentes/Admin';
import FormularioProducto from './componentes/FormularioProducto';
import ListaProductos from './componentes/listaProductos';
import FormularioEdicion from './componentes/FormularioEdicion';
import './App.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClubFan from "./componentes/clubFan"; 
import ScrollToTop from './componentes/ScrollToTop';
import { BrowserRouter } from 'react-router-dom';


function App() {
const { usuarioAutenticado,cargando } = useAuth();
const { cantidadTotalCarrito } = useContext(CarritoContext);

if(cargando)return <p>Cargando...</p>

if(usuarioAutenticado){
console.log("Estado de usuario en App.jsx:", usuarioAutenticado)
}
return (
  



   
      <BrowserRouter>
      <ScrollToTop />
      <div>
       
        <Header cantidadCarrito={cantidadTotalCarrito} />
        <div className="main-content">
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/dashboard" element={usuarioAutenticado ? <Home /> : <Navigate to="/login" />} />
         <Route path="/Informacion" element={<Informacion/>}/>
          <Route path="/productos" element={  <ProductosContainer/>} />
          <Route path="/producto/:id" element={<ProductoDetalle/>} />
          <Route path="/Contacto" element={<Contacto/>}/>
         <Route path="/clubFan" element={<ClubFan />} />
         <Route path="/carrito" element={<Carrito />} />
         <Route path="/admin" element={usuarioAutenticado?.role === "admin" ? <Admin /> : <Navigate to="/login" replace />}/>
       
       <Route path="/productos/nuevo" element={usuarioAutenticado?.role === "admin" ? <FormularioProducto /> : <Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginRegistrarse />} />
         <Route path="/registro" element={<LoginRegistrarse />} />
      <Route path="/listaProductos" element={<ListaProductos />} />
      <Route path="/FormularioEdicion/:id" element={<FormularioEdicion />} />
     
      </Routes>
        </div>
       <Footer/>
       <ToastContainer position="top-center" autoClose={5000} />
      </div>
      </BrowserRouter>
 
   
  )
}



export default App


