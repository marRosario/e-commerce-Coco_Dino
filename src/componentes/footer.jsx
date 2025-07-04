import React from 'react';  
import '../styles/footer.css'
import logo from "../assets/coco-dino-logo.png";
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

function Footer() {  
    return (  
       <footer className="footer-coco">
  <div className="footer-contenido">
    <div className="footer-columna izquierda">
      <div className="logo-y-frase">
        <img src={logo} alt="Logo Coco-Dino" className="logo-footer" />
        <p className="footer-frase">
          En Coco-Dino trabajamos con amor para que todos los niños y sus familias puedan encontrar ese juguete tan deseado que recordarán por siempre.
        </p>
      </div>
    </div>

    <div className="footer-columna derecha">
      <div className="info-footer">
        <p>📞 Teléfono: +54 11 2233 4455</p>
        <p>📍 Dirección: Avenida de los Coco-Dinos 223</p>
        <p>📞 Atención telefónica: todos los días de 9 a 18hs</p>
        <p>💬 Chat online: todos los días de 9 a 00hs</p>
      </div>
      <div className="redes-footer">
        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaInstagram  className="icono-red1" size={26} />
        </a>
        <a href="https://wa.me/5491122334455" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icono-red2" size={26} />
        </a>
      </div>
    </div>
  </div>
</footer>
 
    );  
}  

export default Footer;  