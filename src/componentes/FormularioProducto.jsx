import React, { useState } from 'react';
import "../styles/FormularioProducto.css"
import { toast } from "react-toastify";


function FormularioProducto() {
  const [producto, setProducto] = useState({
    name: '',
    description: '',
    price: '',
    imagen: ''
  });
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const respuesta = await fetch("https://6855a29f1789e182b37be640.mockapi.io/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: producto.name,
        description: producto.description,
        price: producto.price,
        imagen: producto.imagen,
        estado: "disponible"
      })
    });
    if (respuesta.ok) {
  const nuevoProducto = await respuesta.json();
  console.log("Producto guardado en MockAPI:", nuevoProducto);
  toast.success("🧸 Producto agregado correctamente", {
    position: "top-center",
    autoClose: 3000,
    style: {
      backgroundColor: "#d4f4dd",
      color: "#1b4332",
      fontFamily: "'Macondo Swash Caps', cursive",
      borderRadius: "10px"
    }
  });


    
      // Resetear el formulario
      setProducto({
        name: '',
        description: '',
        price: '',
        imagen: ''
      });
    } else {
      console.error("Error al guardar en MockAPI");
      toast.error("❌ Hubo un problema al guardar el producto", {
        position: "top-center",
        autoClose: 3000,
        style: {
          backgroundColor: "#f8d7da",
          color: "#842029",
          fontFamily: "'Macondo Swash Caps', cursive",
          borderRadius: "10px"
        }
      });
    }
  } catch (error) {
   console.error("Error en la solicitud:", error);
    toast.error("🚫 No se pudo conectar con MockAPI", {
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
};



  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  };

  
  return (
    <div className="container-nuevoProducto">
      <form onSubmit={handleSubmit}>
        <h2 className="agregar">Agregar Producto</h2>

        <div>
          <label>Nombre</label>
          <input type="text" name="name" value={producto.name} onChange={handleChange} required />
        </div>

        <div>
          <label>Descripción</label>
          <textarea name="description" value={producto.description} onChange={handleChange} />
        </div>

        <div>
          <label>Precio</label>
          <input type="number" name="price" value={producto.price} onChange={handleChange} required />
        </div>

        <div>
          <label>URL de la imagen</label>
          <input type="text" name="imagen" value={producto.imagen} onChange={handleChange} />
        </div>

        <button type="submit">Guardar</button>
      </form>
    </div>
    
  );
  
}

export default FormularioProducto;
