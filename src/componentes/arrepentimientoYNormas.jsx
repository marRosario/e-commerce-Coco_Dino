import React, { useState } from "react";
import "../styles/arrepentimientoYNormas.css"
import dino from '../assets/dino.png';
import dinoSuper from "../assets/dinoSuper.png"
export default function ArrepentimientoYNormas() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [contenidoModal, setContenidoModal] = useState("");
const [ ,setTituloModal] = useState("");
const [tipoModal, setTipoModal] = useState("");

 
const abrirModal = (tipo) => {
    switch (tipo) {
      case "arrepentimiento":
        setTipoModal("arrepentimiento");
       setContenidoModal(`
    <h3>¿Cómo cancelo mi compra?</h3>
    <p>Para cancelar tu compra tenés que escribirnos para que podamos ayudarte. Encontrá nuestros datos de contacto en el e-mail que recibiste con la confirmación de compra.</p>
    <p>Si la compra aún no fue despachada, comunicate con nosotros vía WhatsApp y envianos un mail.</p>
    <p>Si la compra ya se despachó, podés rechazarla cuando te llegue o no retirarla del correo. Cuando el paquete llegue a tu domicilio, pedile a la persona del reparto que se lo lleve de vuelta. Si el envío es a una sucursal de correo, no vayas a buscar el paquete.</p>
  `);
  break;
      case "normas":
        setTipoModal("normas");
       setContenidoModal(`<h2>Contratos de adhesión - Ley N° 24.240 de Defensa del Consumidor</h2>
      <h3>Este sitio web es administrado exclusivamente por JUGUETERIA COCO-DINO. (“Vendedor”)A continuación se destacan los puntos más importantes de la relación entre el Vendedor y los compradores  </h3>
  <h3>1. Vender</h3>
  <p><strong>Obligaciones del Vendedor:</strong></p>
  <ul>
    <li>Cumplir con todos los requisitos y permisos que exige la ley para vender los productos ofrecidos en la Tienda;</li>
    <li>Respetar las condiciones de venta publicadas;</li>
    <li>Emitir la factura correspondiente, salvo que el Vendedor sea una persona física que efectúe ventas ocasionales o esté eximido de la obligación fiscal de emisión de facturas.</li>
  </ul>

  <h3>2. Comprar</h3>
  <p><strong>Obligaciones del Comprador:</strong></p>
  <ul>
    <li>Leer toda la información incluida por el Vendedor en la publicación y realizar cualquier consulta antes de comprar.</li>
    <li>Revisar atentamente etiquetas, advertencias, instrucciones y certificados de garantía antes de utilizar o consumir el producto.</li>
    <li>Pagar el precio del producto o servicio indicado, más el costo de envío si corresponde, y recibir el producto.</li>
    <li>Una vez finalizada la compra, el Comprador Logueado podrá dejar una opinión sobre el producto y/o sobre su vendedor.</li>
  </ul>
`);
break
        
      default:
        setTituloModal("Información");
        setContenidoModal("Detalle no disponible.");
    }
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  return (
  <section className="contenedor-bloques-coco">

  <div className="bloque-coco" onClick={() => abrirModal("arrepentimiento")}>
    <div className="contenido-bloque">
      <div className="imagen-dino">
        <img src={dino} alt="Dino simpático con mensaje" />
      </div>
      <div className="bloque-textual">
        <h2>¿Compraste algo que no era tan dino-mágico?</h2>
        <h3>¡Lo podes devolver!</h3>
        <button className="boton-coco">🦕 Desplegá las reglas sin rugir</button>
      </div>
      
    </div>
  </div>

  <div className="bloque-coco" onClick={() => abrirModal("normas")}>
    <div className="contenido-bloque">
      <div className="imagen-superdino">
        <img src={dinoSuper} alt="Dino superhéroe" />
      </div>
      <div className="bloque-textual">
        <h2>¡Conocé tus superpoderes como comprador!</h2>
        <p className="subtexto-super">Tus derechos  están listos para rugir 🦕⚡</p>
        <button className="boton-coco">🔓 Activá tus poderes</button>
      </div>
      
    </div>
  </div>

  {modalAbierto && (
    <div className="modalCondiciones">
      <div
        className={`contenidoModal ${
          tipoModal === "normas"
            ? "modalNormas"
            : tipoModal === "arrepentimiento"
            ? "modalArrepentimiento"
            : ""
        }`}
      >
        <div className="modalContenidoInterno">
          <div dangerouslySetInnerHTML={{ __html: contenidoModal }} />
        </div>
        <button onClick={cerrarModal}>Cerrar</button>
      </div>
    </div>
  )}

</section>

);
}