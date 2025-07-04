import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { toast } from "react-toastify";




function FormularioEdicion() {
  const { id } = useParams(); // Captura el ID del producto desde la URL
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    name: "",
    price: "",
    description: "",
    imagen: "",
    estado:"disponible"
  });

  useEffect(() => {
    const obtenerProducto = async () => {
      try {
        const respuesta = await fetch(`https://6855a29f1789e182b37be640.mockapi.io/productos/${id}`);
        const datos = await respuesta.json();
        setProducto(datos); // Cargar datos actuales del producto
      console.log("Producto cargado:", datos);

      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };

    obtenerProducto();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const respuesta = await fetch(`https://6855a29f1789e182b37be640.mockapi.io/productos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(producto)
    });

    if (respuesta.ok) {
      const actualizado = await respuesta.json();
      console.log("Producto actualizado:", actualizado);
      toast.success(" Producto actualizado correctamente", {
    position: "top-center",
    autoClose: 3000,
    style: {
      backgroundColor: "#d4f4dd",
      color: "#1b4332",
      fontFamily: "'Macondo Swash Caps', cursive",
      borderRadius: "10px"
    }
  });
     setTimeout(() => navigate("/listaProductos"), 1000); // delay para que se vea el toast
} else {
  toast.error("❌ Hubo un problema al actualizar el producto", {
    position: "top-center",
    autoClose: 3000,
    style: {
      backgroundColor: "#f8d7da",
      color: "#842029",
      fontFamily: "'Quicksand', sans-serif",
      borderRadius: "10px"
    }
  });
} 
  } catch (error) {
    console.error("Error en la solicitud:", error);
    alert("No se pudo conectar con el servidor");
  }
};

  return (
    <div>
      <Helmet>
              <title>Admin</title>
              <meta name="description" content="Explorá la juguetería Coco-Dino: peluches, colores, y alegría para crecer jugando." />
            </Helmet>
      <h2>Editar Producto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:</label>
        <input type="text" name="name" value={producto.name} onChange={handleChange} required />

        <label>Precio:</label>
        <input type="number" name="price" value={producto.price} onChange={handleChange} required />

        <label>Descripción:</label>
        <textarea name="description" value={producto.description} onChange={handleChange} required />

        <label>Estado:</label>
        <select name="estado" value={producto.estado} onChange={handleChange}>
        <option value="disponible">Disponible</option>
        <option value="agotado">Agotado</option>
        </select>


        <label>URL de la Imagen:</label>
        <input type="text" name="imagen" value={producto.imagen} onChange={handleChange} required />

        <button type="submit">Guardar Cambios</button>
      </form>
       
    </div>
    
  );
 
}

export default FormularioEdicion;
