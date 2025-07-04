import { useState } from "react";
import {db} from "../autenticacion/firebaseConfig"
import "../styles/Newsletter.css"; 
import { collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Newsletter() {
  const [formulario, setFormulario] = useState({
    email: "",
    nombre: "",
    cumple: ""
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "suscriptores"), {
      email: formulario.email,
      nombre: formulario.nombre,
      cumple: formulario.cumple,
      creadoEn: new Date()
    });
    toast.success("🧸 ¡Gracias por suscribirte! Pronto recibirás un correo de confirmación 🎉", {
    position: "top-center",
    autoClose: 4000,
    style:{
    backgroundColor: "#fdf0e6", 
    color: "#c0392b",           
    fontWeight: "bold"
  }
    })
    setFormulario({ email: "", nombre: "", cumple: "" });
  } catch (error) {
    console.error("Error al guardar en Firestore:", error);
    toast.error("⚠️ Hubo un problema al guardar tu suscripción. Intentá de nuevo.", {
    position: "top-center",
    autoClose: 5000
  });
  }
};


  return (
    <section id="newsletter" className="seccion-newsletter">

    <form onSubmit={handleSubmit} className="newsletter">
      <h3>Suscribite a nuestro newsletter</h3>
      <p>y recibí novedades y descuentos exclusivos 🧸🎉</p>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formulario.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        value={formulario.nombre}
        onChange={handleChange}
      />
      <input
        type="text"
        name="cumple"
        placeholder="Cumpleaños (DD/MM)"
        value={formulario.cumple}
        onChange={handleChange}
      />

      <button type="submit">Suscribirme</button>
      <small>Recibirás un correo para validar tu email ✨</small>
    </form>
</section>

  );
}

export default Newsletter;
