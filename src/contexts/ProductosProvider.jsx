import { useState, useEffect } from "react";
import { ProductosContext } from "./ProductosContext";

export function ProductosProvider({ children }) {
  const [productos, setProductos] = useState([]);

  const obtenerProductos = async () => {
    try {
      const respuesta = await fetch("https://6855a29f1789e182b37be640.mockapi.io/productos");
    let datos = await respuesta.json();
    datos= datos.map((producto) => {
      if (!producto.description && producto.descripcion) {
        return { ...producto, description: producto.descripcion };
      }
      return producto;
    });

      setProductos(datos);
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    <ProductosContext.Provider value={{ productos, setProductos, obtenerProductos }}>
      {children}
    </ProductosContext.Provider>
  );
}
