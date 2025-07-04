import { createContext, useContext } from "react";

// Creo el contexto de autenticación
export const AuthContext = createContext();

// Hook personalizado para acceder al contexto fácilmente
export function useAuth() {
  return useContext(AuthContext);
}
