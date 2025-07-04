

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/context";
import { iniciarSesion, crearUsuario } from "../autenticacion/firebase";
import '../styles/LoginRegistro.css';
import { Helmet } from 'react-helmet-async'
import { useLocation } from "react-router-dom";

function LoginRegistrarse() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modoRegistro, setModoRegistro] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();

const from = location.state?.from || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMensaje("");

    if (modoRegistro) {
      if (password !== confirmPassword) {
        setMensaje("Las contraseñas no coinciden.");
        return;
      }
      try {
        await crearUsuario(usuario, password);
        const user = await iniciarSesion(usuario, password);
        const emailLimpio = user.email.trim().toLowerCase();
        login(emailLimpio, user.accessToken);
        navigate(from);
      } catch (error) {
        console.error("Error en el registro:", error); // Mostrar el error en la consola
        setMensaje("Error al registrar usuario.");
      }
    } else {
      try {
        const user = await iniciarSesion(usuario, password);
        const emailLimpio = user.email.trim().toLowerCase();
login(emailLimpio, user.accessToken);

        navigate(from); 
      } catch (error) {
        console.error("Error en el inicio de sesión:", error); // Mostrar el error en la consola
        setMensaje("Credenciales incorrectas o usuario no registrado.");
      }
    }
  };

  return (
<div className="container-registro">

  <Helmet>
        <title>Registrarse – Coco-Dino-Juguetería</title>
        <meta name="description" content="Explorá la juguetería Coco-Dino: peluches, colores, y alegría para crecer jugando." />
      </Helmet>

      <div className="registro-content">
        <h2 className="titulo-registro">{modoRegistro ? "Regístrate" : "Regístrate"}</h2>
        <form onSubmit={handleSubmit} className="formulario-registro">
          <input type="email" placeholder="Correo Electrónico" value={usuario} onChange={(e) => setUsuario(e.target.value)} required className="entrada" />
          <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required className="entrada" />
          {modoRegistro && <input type="password" placeholder="Confirmar Contraseña" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required className="auth-input" />}
          
         {mensaje && <p className={`mensaje ${modoRegistro ? "exito" : "error"}`}>{mensaje}</p>}

          
          <button type="submit" className="boton-registrarse">{modoRegistro ? "Registrarse" : "Iniciar Sesión"}</button>
       <button onClick={() => setModoRegistro(!modoRegistro)} className="boton-toggle">
          {modoRegistro ? "¿Ya tienes cuenta? Inicia sesión" : "¿No tienes cuenta? Regístrate"}
        </button>
       
        </form>
        
      </div>
    </div>
  );
}

export default LoginRegistrarse;
