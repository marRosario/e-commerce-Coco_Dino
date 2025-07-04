


import React, { useEffect, useContext,useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useProductos } from "../contexts/ProductosContext";
import { BusquedaContext } from "../contexts/BusquedaContext";
import { Helmet } from 'react-helmet-async';
import "../styles/listaProductos.css"
import BotonDinoSubir from "../componentes/BotonDinoSubir"
function ListaProductos() {
  const { productos, setProductos, obtenerProductos } = useProductos();
  const { terminoBusqueda } = useContext(BusquedaContext);
  const navigate = useNavigate();

  
 
  const normalizar = (texto) =>
  texto?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || "";


const productosFiltrados = useMemo(() => {
  return productos.filter((producto) => {
    const name = normalizar(producto.name);
    const termino = normalizar(terminoBusqueda);
    console.log(" Comparando:", name, "vs", termino);
    return name.includes(termino);
  });
}, [productos, terminoBusqueda]);


const eliminarProducto = async (id) => {
  const confirmacion = window.confirm("¿Estás seguro de que quieres eliminar este producto?");
  if (!confirmacion) return;
  try {
    const res = await fetch(`https://6855a29f1789e182b37be640.mockapi.io/productos/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProductos((prev) => prev.filter((producto) => producto.id !== id));
      alert("Producto eliminado correctamente.");
    } else {
      alert(`No se pudo eliminar el producto (status ${res.status}).`);
      console.error("Error de eliminación:", res.status);
    }
  } catch (error) {
    console.error("Error al eliminar:", error);
    alert("Ocurrió un problema al intentar eliminar el producto.");
  }
};

  

  useEffect(() => {
    obtenerProductos();

const scrollPos = sessionStorage.getItem("scrollPos");
  if (scrollPos) {
    window.scrollTo(0, parseInt(scrollPos)); // vuelve al lugar anterior
    sessionStorage.removeItem("scrollPos");  // limpia el valor guardado
  }


  }, [obtenerProductos]);

  
          return (
  <div>
    <Helmet>
      <title>Admin</title>
      <meta
        name="description"
        content="Explorá la juguetería Coco-Dino: peluches, colores, y alegría para crecer jugando."
      />
    </Helmet>

    <h2 className="listaProducto-Titulo">Lista de Productos</h2>

    <div className="productos-container">
      {productosFiltrados.length === 0 ? (
        <p>No se encontraron productos para "{terminoBusqueda}".</p>
      ) : (
        productosFiltrados.map((producto) => {
          const estaAgotado = producto.estado === "agotado";
          const descripcionContieneAgotado = producto.description
            ?.toLowerCase()
            .includes("agotado");

          return (
            <div key={producto.id} className={`producto-card ${estaAgotado ? "agotado" : ""}`}>
              {estaAgotado && <span className="etiqueta-agotado">AGOTADO</span>}

              <div className="contenido-producto">
                <div className="contenido-textual">
                  <h3>{producto.name}</h3>
                  <p>Precio: ${producto.price}</p>
                  <p className="descripcion-producto">
                    {producto.description || "Sin descripción"}
                    {!descripcionContieneAgotado && estaAgotado && (
                      <span className="texto-rojo"> ⚠️ Producto agotado</span>
                    )}
                  </p>

                  <div className="botones-inferiores">
                    <button
                      className="botonEditar"
                      onClick={() => {
                      sessionStorage.setItem("scrollPos", window.scrollY); 
                      navigate(`/FormularioEdicion/${producto.id}`);
                      }}
                      >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => eliminarProducto(producto.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>

                <img src={producto.imagen} alt={producto.name} width="100" />
              </div>
            </div>
          );
        })
      )}
    </div>
    <BotonDinoSubir/>
  </div>
); 

}

export default ListaProductos;
