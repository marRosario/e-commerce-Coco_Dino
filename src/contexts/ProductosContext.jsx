
import { createContext, useContext } from "react";

export const ProductosContext = createContext();

export function useProductos() {
  const context = useContext(ProductosContext);
  if (!context) {
    throw new Error("useProductos debe usarse dentro de ProductosProvider");
  }
  return context;
}
