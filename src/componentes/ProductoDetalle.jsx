
import {useParams,useNavigate}from "react-router-dom";
import {useState,useEffect,useContext} from 'react';
import { CarritoContext } from "../contexts/CarritoContexts";
import Card from "react-bootstrap/Card";
import "../styles/ProductoDetalle.css"
import "bootstrap/dist/css/bootstrap.min.css";
import styled from 'styled-components';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";



export const BotonCarrito = styled.button`
  background-color: #7b2cbf;
  color: white;
  border: none;
  padding: 5px 8px;
  border-radius: 20px 0 20px 0;
  font-size:1rem; 
  cursor: pointer;
  transition: all 0.3s ease;
  display:flex;
  align-items:center;
  gap:8px;
  &:hover {
    background-color: #5d1f93;
    transform: scale(1.05);
  }
`;

 export const BotonVolver = styled.button`
  background-color: transparent;
  color: #7b2cbf;
  border: 2px dashed #7b2cbf;
  padding: 5px 8px;
  border-radius: 0 20px 0 20px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: #f2e7fb;
    transform: scale(1.05);
  }
`;




function ProductoDetalle(){
const {id}=useParams(); //obtengo el parametro de la url
const navigate=useNavigate();
const{agregarAlCarrito}=useContext(CarritoContext);
const [producto,setProducto]=useState(null);
const [cargando, setCargando]=useState(true);
const [error, setError]=useState(null);



     
 useEffect(() => {
    fetch(`https://6855a29f1789e182b37be640.mockapi.io/productos/${id}`)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProducto(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error("Error al cargar el producto:", error);
        
        setError("Hubo un problema al cargar el producto.");
        setCargando(false);
      });
  }, [id]);

  



const manejarAgregarAlCarrito = () => {
  if (producto) {
    console.log("agregado");
    agregarAlCarrito(producto);

    toast(
      <div style={{ padding: "8px" }}>
        <strong> 🎁¡Producto agregado!</strong>
        <div>{producto.name} fue añadido al carrito</div>
      </div>,
      {
         
        type: "success",
        position: "top-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        style: {
          backgroundColor: "#f3e1fc",
          color: "#3a294f",
          borderRadius: "12px",
          fontFamily: 'Macondo Swash Caps,cursive',
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",

        },
      }
    );
  }
};





  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

 
return(
  <div className="d-flex justify-content-center mt-4">
  <Card className="card-custom" style={{width:"20rem"}}>
    <Card.Img variant="top" src={producto.imagen}alt={producto.name}/>
    <Card.Body className="card-body-custom">
      <Card.Title>{producto.name}</Card.Title>
      <Card.Text className="mi-app-descripcion">{producto.description}</Card.Text>
       <Card.Text className="fw-bold text-price-custom"> ${Number(producto.price).toFixed(2)}</Card.Text>
      <div className="d-flex justify-content-between mt-4"> 
        <BotonCarrito onClick={manejarAgregarAlCarrito} title="Agregar al carrito">Agregar al 
  <AiOutlineShoppingCart size={22}/>
</BotonCarrito>
        <BotonVolver onClick={()=>navigate("/productos")}>Volver a productos</BotonVolver>
      </div>
    </Card.Body>

  </Card>
</div>
)
  
}

export default ProductoDetalle