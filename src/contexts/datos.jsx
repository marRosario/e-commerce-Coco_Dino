import{useState} from "react";
import {AuthContext} from "./context";


import {  useEffect } from "react";

export function AuthProvider({ children }) {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [token, setToken] = useState(null);
  const [cargando, setCargando] = useState(true); // 👈 nuevo

  useEffect(() => {
    const guardado = localStorage.getItem("usuario");
    const tokenGuardado = localStorage.getItem("token");

    if (guardado && tokenGuardado) {
      setUsuarioAutenticado(JSON.parse(guardado));
      setToken(tokenGuardado);
    }

    setCargando(false); 
  }, []);

  const login = (usuario, fakeToken) => {
    const admins = ["admin@gmail.com", "mar.rochy@gmail.com"];
    const correoNormalizado = usuario.trim().toLowerCase();
    const role = admins.includes(correoNormalizado) ? "admin" : "user";
    const userObj = { email: correoNormalizado, role };

    localStorage.setItem("usuario", JSON.stringify(userObj));
    localStorage.setItem("token", fakeToken);

    setUsuarioAutenticado(userObj);
    setToken(fakeToken);

    console.log("Usuario autenticado:", role);
  };

  const logout = () => {
    localStorage.removeItem("usuario");
    localStorage.removeItem("token");
    setUsuarioAutenticado(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ usuarioAutenticado, token, login, logout, cargando }}>
      {!cargando && children}
    </AuthContext.Provider>
  );
}



