import{useState} from "react";
import {AuthContext} from "./context";
/*export function AuthProvider ({children}){

const [usuarioAutenticado,setUsuarioAutenticado]=useState(null);
const[token,setToken]=useState(null);

const login=(usuario,fakeToken)=>{
  const admins=["admin@gmail.com", "mar.rochy@gmail.com"];
  const role=admins.includes(usuario)? "admin":"user";
  setUsuarioAutenticado(role);
  setToken(fakeToken);
  console.log("Usuario autenticado:",role);
  const logout=()=>{
    setUsuarioAutenticado(null);
    setToken(null)
  }

  return(
<AuthContext.Provider value={{
  usuarioAutenticado,token,login,logout
}}>{children}
</AuthContext.Provider>

  )
}
}*/

/*import { useState } from "react";
import { AuthContext } from "./context";

export function AuthProvider({ children }) {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(() => {
    const guardado = localStorage.getItem("usuario");
    return guardado ? JSON.parse(guardado) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem("token") || null;
  });

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
    <AuthContext.Provider value={{ usuarioAutenticado, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}*/

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

    setCargando(false); // 👈 solo después de intentar cargar
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



