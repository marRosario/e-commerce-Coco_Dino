import React, { useState } from "react";
import "../styles/metodosPago.css"; 
import { BiCreditCard } from "react-icons/bi";
import { BiCalendarCheck } from "react-icons/bi";
import { MdCreditCard } from "react-icons/md";
import { FaMoneyBillWave } from "react-icons/fa";
import masterCard from "../assets/masterCard.png";
import bancoFrances from "../assets/bancoFrances.png";
import visaMaster from "../assets/visaMaster.png"
import bancoProvincia from "../assets/bancoProvincia.png"


export default function MetodosDePago() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [tituloModal, setTituloModal] = useState("");
  const [contenidoModal, setContenidoModal] = useState("");

  const abrirModal = (tipo) => {
    switch (tipo) {
      case "cuotas":
        setTituloModal("Pagá en cuotas");
        setContenidoModal("Hasta 6 cuotas sin interés con Visa y MasterCard en compras mayores a $35.000.");
        break;
      case "debito":
        setTituloModal("Tarjeta de débito");
        setContenidoModal("Descuento del 10% en tiendas físicas los viernes con tarjeta de débito.");
        break;
      case "credito":
        setTituloModal("Tarjeta de crédito");
        setContenidoModal("Aceptamos Visa, MasterCard, Cabal. Compra en 3 cuotas sin interés todos los días.En 6 cuotas con 15% de interes");
        break;
      case "otros":
        setTituloModal("Otros medios de pago");
        setContenidoModal("Transferencias, efectivo en tienda y billeteras virtuales como MercadoPago.Si pagas en efectivo tenes un 25% de descuento en el segundo producto");
        break;
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
    <section className="metodos-de-pago">
      <h3>Métodos de Pago</h3>
      <div className="metodos-pago">
        <button onClick={() => abrirModal("cuotas")}><BiCalendarCheck size={30} style={{ marginRight: "8px", color: "#4e3300" }} /> Pagar en cuotas</button>
        <button onClick={() => abrirModal("debito")}><MdCreditCard size={30} style={{ marginRight: "8px", color: "#4e3300" }} /> Tarjeta de débito</button>
        <button onClick={() => abrirModal("credito")}><BiCreditCard size={30}color="#4e3300" style={{ marginRight: "8px" }} />   Tarjeta de crédito</button>
        <button onClick={() => abrirModal("otros")}><FaMoneyBillWave size={30} style={{ marginRight: "8px", color: "#4e3300" }} /> Más medios de pago</button>
      </div>

      {modalAbierto && (
        <div className="modal-condiciones">
          <div className="contenido-modal">
            <h3>{tituloModal}</h3>
<div className="bancos-logos">
     <img src={masterCard} alt="Logo Mastercard" />
  <img src={bancoFrances} alt="Banco Francés" />
  <img src={visaMaster}alt="Logo Visa Master"/>
 <img src={bancoProvincia}alt="Logo Banco Provincia"/>
  </div>

            <p>{contenidoModal}</p>
            <button onClick={cerrarModal}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}
