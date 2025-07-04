import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { useAuth } from "../contexts/context"; 
import "../styles/carrito.css";
import { CarritoContext } from "../contexts/CarritoContexts";
import {ToastContainer,toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Helmet } from 'react-helmet-async';


function Carrito() {
    const { productosCarrito, actualizarCantidad, borrarProductoCarrito, vaciarCarrito } = useContext(CarritoContext);
    const navigate = useNavigate();
    const { usuarioAutenticado,logout } = useAuth(); // Obtener estado de autenticación
    const total = productosCarrito.reduce((acc, producto) => acc + producto.price * producto.cantidad, 0).toFixed(2);
    const [bloqueado, setBloqueado] = React.useState(false);
  

const manejarCompra = () => {
  if (bloqueado) return;
  setBloqueado(true);

  if (!usuarioAutenticado || !usuarioAutenticado.email) {
    toast.warn(
      <div>
        <strong>⚠️ Atención:</strong> Para finalizar la compra debés registrarte.
      </div>,
      {
        position: "top-center",
        autoClose: 3500,
        closeOnClick: true,
        pauseOnHover: true,
        toastId: "registro-necesario",
        style: {
          backgroundColor: "#f2d0f7",
          color: "#562f68",
          fontFamily: "'Quicksand', sans-serif",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)"
        }
      }
    );

    setTimeout(() => {
      navigate("/registro",{state:{from:"/carrito"}});
      setBloqueado(false);
    }, 3500);
    return;
  }

  toast.success("¡Compra realizada con éxito!", {
    autoClose: 1500,
    closeOnClick: true,
    pauseOnHover: true,
    toastId: "compra-exitosa",
    position: "top-center",
    style: {
      backgroundColor: "#a0eec0",
      color: "#044d29",
      fontFamily: 'Macondo Swash Caps,cursive',
      borderRadius: "10px"
    },
    onClose: () => {
      setTimeout(() => {
        toast.info(
          ({ closeToast }) => (
            <div>
              <p style={{ margin: 0, fontWeight: "bold" }}>¿Querés cerrar sesión?</p>
              <button
                onClick={() => {
                  vaciarCarrito();
                  logout();
                  closeToast();
                  navigate("/");
                  setBloqueado(false);
                }}
                style={{
                  marginRight: "6px",
                  padding: "4px 8px",
                  background: "#a46bcf",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px"
                }}
              >
                Sí
              </button>
              <button
                onClick={() => {
                  closeToast();
                  setBloqueado(false);
                }}
                style={{
                  padding: "4px 8px",
                  background: "#cda7e0",
                  color: "#4e2a71",
                  border: "none",
                  borderRadius: "4px"
                }}
              >
                No
              </button>
            </div>
          ),
          {
            autoClose: false,
            closeOnClick: false,
            pauseOnHover: true,
            toastId: "confirmar-cierre",
            position: "top-center",
            style: {
              backgroundColor: "#e7d4fa",
              color: "#4e2a71",
              fontFamily: 'Macondo Swash Caps,cursive',
              borderRadius: "10px"
            }
          }
        );
      }, 500);
    }
  });
};



    

    return (

      
      
        <div className="carrito-container">

<Helmet>
  <title>Carrito – Coco-Dino</title>
  <meta name="description" content="Carrito de compras Coco_Dino" />
  
</Helmet>


            {productosCarrito.length === 0 ? (
                <p className="carritoVacio">Carrito vacío</p>
            ) : (
                <div>
                    {productosCarrito.map((producto, index) => (
                        <div key={`${producto.id}-${index}`} className={`carrito-producto"${producto.description?.toUpperCase().includes("AGOTADO")?"producto-agotado":""}`}>
                            <p className="carrito-nombre">{producto.name}</p>
                            <div className="fila-carrito">
                                <img src={producto.imagen} alt={`Imagen de ${producto.name}`} className="carrito-image" />
                                <p className="carrito-precio">Precio: $&nbsp;{producto.price}</p>
                                <p className="carrito-cantidad">
                                    Cantidad:<span className="carrito-cantidad-numero">{producto.cantidad}</span>
                                </p>
                                <p className="carrito-precioSubtotal">
                                    Subtotal: $&nbsp;{(Number(producto.price) * producto.cantidad).toFixed(2)}
                                </p>
                                <div className="carrito-botones">
                                    <button className="boton-accion boton-mas" onClick={() => actualizarCantidad(producto.id, 1)}>+</button>
                                    <button className="boton-accion boton-menos" onClick={() => actualizarCantidad(producto.id, -1)}>-</button>
                                    <button className="boton-accion boton-eliminar" onClick={() => borrarProductoCarrito(producto.id)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="carrito-total">
                        <p>Total......$&nbsp;{total}</p>
                        <div className="contenedorCarrito">
                            <button className="boton-accion boton-vaciar" onClick={vaciarCarrito}>Vaciar Carrito</button>
                            <button className="botonSeguirComprando" onClick={() => navigate("/productos")}>Seguir comprando</button>
                            <button className="botonComprar" onClick={manejarCompra} disabled={bloqueado}> {bloqueado?"Procesando...":"Comprar"}</button> 
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer position="top-center" autoClose={5000} />

        </div>
    );
}


export default Carrito;



