
import "../styles/clubFan.css";
import React, { useState, useRef, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import BotonDinoSubir from "../componentes/BotonDinoSubir"



export default function ClubFan() {
 const tituloRef = useRef(null);
const [shakeTitulo, setShakeTitulo] = useState(false);
  const [formularioEnviado, setFormularioEnviado] = useState(false);
const [desvanecerMensaje, setDesvanecerMensaje] = useState(false);
 const [datos, setDatos] = useState({
  nombre: "",
  apellido: "",
  email: "",
  telefono: "",
  dni: "",
  direccion: "",
  ciudad: "",
  cp: ""
});

const validarFormulario = () => {
    if (!datos.nombre.trim()) return "El nombre es obligatorio.";
    if (!datos.apellido.trim()) return "El apellido es obligatorio.";
    if (!datos.email.includes("@")) return "El email no es válido.";
    if (!datos.telefono || isNaN(datos.telefono)) return "El teléfono debe ser numérico.";
    if (!datos.dni || datos.dni.length < 7) return "El DNI debe tener al menos 7 dígitos.";
    if (!datos.direccion.trim()) return "La dirección es obligatoria.";
    if (!datos.ciudad.trim()) return "La ciudad es obligatoria.";
    if (!datos.cp.trim()) return "El código postal es obligatorio.";
    return null;
  };

useEffect(() => {
if (window.location.hash === "#formulario" && tituloRef.current) {
    setTimeout(() => {
      tituloRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100); 
  }
}, []);

useEffect(() => {
  if (formularioEnviado && tituloRef.current) {
    setTimeout(() => {
      tituloRef.current.scrollIntoView({ behavior: "smooth" });
    }, 50); // esperar 
  }
}, [formularioEnviado]);

const handleChange = (e) => {
  const { name, value } = e.target;
  setDatos((prevDatos) => ({
    ...prevDatos,
    [name]: value,
  }));
};





const handleSubmit = (e) => {
    e.preventDefault();
const error = validarFormulario();
  if (error) {
    alert(error);
    return;
  }

    console.log("Datos enviados:", datos);
    setFormularioEnviado(true);
    setShakeTitulo(true);
   e.target.reset()//limpia el form 
setDatos({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    dni: "",
    direccion: "",
    ciudad: "",
    cp: ""
  });

setTimeout(() => setDesvanecerMensaje(true), 3000); // inicia desvanecimiento
  setTimeout(() => {
    setFormularioEnviado(false);
    setDesvanecerMensaje(false);
  }, 4000); // elimina el mens

  
 setTimeout(() => setShakeTitulo(false), 600);
  };

  return (
    <div className="fondo-formulario-fan">
        <Helmet>
  <title>Club de Fans – Coco-Dino</title>
  <meta name="description" content="Unite al club oficial de fans de Coco-Dino y accedé a beneficios exclusivos con tu inscripción." />
  <meta name="keywords" content="club de fans, coco-dino, formulario, beneficios, comunidad" />
</Helmet>



      <section className="formulario-inscripcion" id="formulario">
        <h3 ref={tituloRef} className={`formulario-titulo ${shakeTitulo ? "shake" : ""}`}>
  ¡Bienvenidos al Club de fans!
</h3>
{formularioEnviado && (
  <p className={`mensaje-floating ${desvanecerMensaje ? "desvanecido" : ""}`}>
    ¡Formulario enviado con éxito!
  </p>
)}
        <p className="recomendaciones">
          Completá el siguiente formulario con todos tus datos para obtener beneficios exclusivos.
          Una vez aprobada, con tu DNI presencial, podrás acceder a nuestra comunidad en nuestras tiendas físicas.
          <span>...¡ Sumate al club COCO-DINO❤️ !</span>
        </p>

        <form className="formulario-grid" onSubmit={handleSubmit}>
       
          <div className="campo">
            <label>Nombre</label>
            <input type="text" name="nombre" value={datos.nombre}onChange={handleChange}required />
          </div>
         
  <div className="campo">
    <label>Apellido</label>
    <input type="text" name="apellido"value={datos.apellido} onChange={handleChange} required />
  </div>
  <div className="campo">
    <label>Email</label>
    <input type="email" name="email" value={datos.email} onChange={handleChange}required />
  </div>
  <div className="campo">
    <label>Teléfono</label>
    <input type="number" name="telefono" value={datos.telefono} onChange={handleChange}  required />
  </div>
  <div className="campo">
    <label>DNI</label>
    <input type="number" name="dni"value={datos.dni} onChange={handleChange} required />
  </div>
  <div className="campo">
    <label>Dirección</label>
    <input type="text" name="direccion"value={datos.direccion} onChange={handleChange} required />
  </div>
  <div className="campo">
    <label>Ciudad</label>
    <input type="text" name="ciudad" value={datos.ciudad} onChange={handleChange}required />
  </div>
  <div className="campo">
    <label>Código Postal</label>
    <input type="text" name="cp" value={datos.cp} onChange={handleChange}required />
  </div>

  <button className="boton-confirmar" type="submit">
    Confirmar
  </button>
</form>   
      </section>
      <BotonDinoSubir/>
    </div>
  );
}
