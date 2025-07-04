import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../contexts/context";
import Carrito from "../assets/shopping-cart.svg";
import "../styles/nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/coco-dino-logo.png";
import { BusquedaContext } from "../contexts/BusquedaContext";
import BarraBusqueda from "./BarraBusqueda";


function Nav({ cantidadCarrito }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const toggleMenu = () => setMenuAbierto(!menuAbierto); 
 const cerrarMenu = () => setMenuAbierto(false)
  const { usuarioAutenticado, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Coco-Dino-Logo" className="logo-coco-dino" />
          <span className="logo-text">COCO-DINO</span>
       
        </Link>

        <button
        className="navbar-toggler"
        type="button"
        onClick={toggleMenu}
      >
        ☰
      </button>
<div className={`collapse navbar-collapse ${menuAbierto ? "show" : ""}`}>


  
  <ul className="navbar-nav ms-auto">
    <li className="nav-item">
      <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to="/" onClick={cerrarMenu}> Inicio
        </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Informacion"onClick={cerrarMenu}>
                Información
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                to="/productos"
                end onClick={cerrarMenu}
              >
                Productos{" "}
              </NavLink>
            </li>
            <li className="nav-item">
             
             <NavLink className="nav-link" to="/clubFan" onClick={cerrarMenu}>
               ❤️ Fans
              </NavLink>
             </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/Contacto"onClick={cerrarMenu} >
                Contacto
              </NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/carrito"onClick={cerrarMenu} >
                <img src={Carrito} alt="Carrito" className="icono-carrito" />
                {cantidadCarrito > 0 && (
                  <span className="badge bg-red">{cantidadCarrito}</span>
                )}
              </Link>
            </li>

{usuarioAutenticado?.role === "admin" && (
              <>
<li className="nav-item dropdown position-relative">
  <button
    className="nav-link dropdown-toggle admin-boton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Admin
    
  </button>
  <ul className="dropdown-menu">
     <li><NavLink className="dropdown-item dropdown-panel-control" to="/admin" onClick={cerrarMenu}>Lista Productos</NavLink></li>
    <li><NavLink className="dropdown-item dropdown-nuevo-producto" to="/productos/nuevo"onClick={cerrarMenu} >Nuevo Producto</NavLink></li>
    <li><button className="dropdown-item text-danger" onClick={()=>{cerrarMenu();logout();}}>Cerrar sesión</button></li>
  </ul>
</li>


    
              </>
  )}

            <li className="nav-item">
              <NavLink className="nav-link registro-link" to="/registro"onClick={cerrarMenu} >
                Registrarse
              </NavLink>
            </li>
          </ul>
  <div className="barra-superior me-auto">
    <BarraBusqueda />
  </div>

        </div>
      </div>
    </nav>
  );
}

export default Nav;
