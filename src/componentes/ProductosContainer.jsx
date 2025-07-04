
import { useState,useContext } from "react";
import '../styles/producto.css'
import Card from './Card';
import Carrito from "./carrito";
import { useEffect } from "react";
import { BotonPagina } from "./componentBotones";
import { BusquedaContext } from "../contexts/BusquedaContext";
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import BotonDinoSubir from "../componentes/BotonDinoSubir"
    

function ProductosContainer({agregarAlCarrito}) {
      const { terminoBusqueda } = useContext(BusquedaContext);

      const [productos, setProductos] = useState([]); //productos , almacena la lista de productos obtenidos de la api
      const [cargando, setCargando] = useState(true);
      const [error, setError] = useState(null);
    //los tres ultimos const los agregue para hacer el useEffect y el catch
      const[paginaActual,setPaginaActual]=useState(1);
      const productosPorPagina=10;
     const normalizar = (texto) =>
    texto?.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") || "";
const [searchParams] = useSearchParams();
const edadSeleccionada = searchParams.get("edad");

  
 const productosFiltrados = productos.filter((producto) => {
  const nombre = normalizar(producto.name);
const descripcion = normalizar(producto.description);
const termino = normalizar(terminoBusqueda).trim();
const regex = new RegExp(`\\b${termino}\\b`, "i");

const coincideBusqueda = regex.test(nombre) || regex.test(descripcion);

  const coincideEdad = edadSeleccionada
    ? nombre.includes(normalizar(edadSeleccionada)) || descripcion.includes(normalizar(edadSeleccionada))
  : true

  return coincideBusqueda && coincideEdad;
  });

      const indiceInicial=(paginaActual-1)* productosPorPagina;
      const indiceFinal= paginaActual*productosPorPagina;
      const productosAMostrar=productosFiltrados.slice(indiceInicial,indiceFinal)
      


      useEffect(( ) => {
        fetch('https://6855a29f1789e182b37be640.mockapi.io/productos')//fetch hace la solicitud HTTP GET a la api
            .then((respuesta) => respuesta.json())//cuando la api responda aca la respuesta que envia se convierte en un objeto js usando respuesta.json
         
            .then((datos) => { //si fetch y respuesta funcionan bien aca se capturan los datos recibidos
              console.log( datos)
                setProductos(datos);//almacena los datos recibidos
                setCargando(false);//cambia el estado cargando, ya sea porque se terminaron de cargar o por que hay un error
             console.log("Productos obtenidos desde MockAPI:", datos)
              })
            .catch((error) => { //si hay un error se ejecuta este bloque 
              console.error("Error al cargar los productos:", error);
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);//asegura que el estado de carga se actualice incluso si ocurrio un error 
            });
    }, []); //este array esta vacio por eso el useEffect se ejecuta una sola vez, cuando el componente se monta en el Dom
       
    useEffect(() => {//hace scroll cada vez que cambia de pagina 1, 2, 3
       window.scrollTo({ top: 0, behavior: "smooth" });
      }, [paginaActual]);

    if (cargando) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;
    
 


      return (  
          <div>
 <Helmet>
        <title>Productos – Coco-Dino-Juguetería</title>
        <meta name="description" content="Explorá la juguetería Coco-Dino: peluches, colores, y alegría para crecer jugando." />
      </Helmet>
      <h2 className="tituloProductos">TODOS LOS PRODUCTOS</h2>
          <div className="container">
      <div className="row">
            {productosFiltrados.length === 0 ? (
          <div className="col-12 text-center my-5">
            <p className="alert-busqueda">
              No se encontraron productos que coincidan con tu búsqueda.
            </p>
          </div>
        ) : (
            productosAMostrar.map((producto) => (//paso la funcion agregarAlCarrito al componente Card como una prop para que desde la tarjeta pueda llamar a la funcion al hacer click
            <Card key={producto.id}producto={producto}
            agregarAlCarrito={agregarAlCarrito} 
            esAgotado={producto.description?.trim()==="AGOTADO"}
            />

            ))
          )}
        </div>

<div className="d-flex justify-content-center gap-2 mt-4 mb-5 flex-wrap">
        {[...Array(Math.ceil(productosFiltrados.length / productosPorPagina)).keys()].map(num => (
          <BotonPagina
            key={num}
            onClick={() => setPaginaActual(num + 1)}
            activo={paginaActual === num + 1}
          >
            {num + 1}
          </BotonPagina>
        ))}
      </div>
        </div>
        <BotonDinoSubir />
      </div>
      
      );
    
    }

    export default ProductosContainer