
import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import "../styles/contacto.css"
import fondoContacto from "../assets/fondo-contacto.png"
import { Helmet } from 'react-helmet-async'
import { toast } from "react-toastify";
import BotonDinoSubir from "../componentes/BotonDinoSubir"

function Contacto(){
  const [enviando, setEnviando] = useState(false);

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();
  setEnviando(true);

  setTimeout(() => {
    console.log("Datos enviados:", formData);
    toast.success("¡Mensaje enviado con éxito! 🦕", {
      position: "top-center",
      autoClose: 3000,
      style: {
        backgroundColor: "#d4f4dd",
        color: "#1b4332",
        fontFamily: "'Quicksand', sans-serif",
        borderRadius: "10px"
      }
    });

    setFormData({ nombre: '', apellido: '', asunto: '', mensaje: '' });
    setEnviando(false);
  }, 1500);
};

return(
<div> 

  <div className="fondo-contacto" style={{ backgroundImage: `url(${fondoContacto})` }}>
    <Helmet>
        <title>Contacto – Coco-Dino-Juguetería</title>
        <meta name="description" content="Explorá la juguetería Coco-Dino: peluches, colores, y alegría para crecer jugando." />
      </Helmet>
       <p className="contacto">CONTACTANOS</p>
    <Form onSubmit={handleSubmit} className=" formContacto p-4 rounded bg-light shadow">
      <Row>
        <Col md={6}>
        
          <Form.Group controlId="formNombre" className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresá tu nombre"
              required
            />
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="formApellido" className="mb-3">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Ingresá tu apellido"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="formAsunto" className="mb-3">
        <Form.Label>Asunto</Form.Label>
        <Form.Control
          type="text"
          name="asunto"
          value={formData.asunto}
          onChange={handleChange}
          placeholder="¿Sobre qué querés hablar?"
          required
        />
      </Form.Group>

      <Form.Group controlId="formMensaje" className="mb-3">
        <Form.Label>Mensaje</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Contame lo que necesites..."
          required
        />
      </Form.Group>

      <Button className="boton-contacto" type="submit" disabled={enviando}>
  {enviando ? (
    <span>
      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
      Enviando...
    </span>
  ) : (
    "Enviar"
  )}
</Button>
    </Form>
</div>
<BotonDinoSubir/>
</div>

)


}
export default Contacto



