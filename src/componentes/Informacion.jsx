import React from "react";
import { Helmet } from 'react-helmet-async';
import '../styles/Informacion.css'

const Informacion =()=>{
return(

<div className="informacion-container">
<Helmet>
        <title>Información– Coco-Dino-Juguetería</title>
        <meta name="description" content="Explorá la juguetería Coco-Dino: peluches, colores, y alegría para crecer jugando." />
      </Helmet>

    <div className="informacion-section">
    <h1>SOMOS MÁS QUE UNA JUGUETERÍA...</h1>
    <p>
   En COCO-DINO, creemos en el poder del juego para inspirar, enseñar y conectar.  Nuestros juguetes  despiertan la imaginación y fomentan la creatividad en niños de todas las edades.

Nos apasiona ser parte de momentos mágicos, ya sea el primer peluche de un bebé, un juego de construcción que une a una familia o el juguete que se convierte en el mejor amigo de un niño. Cada producto que ofrecemos refleja nuestro compromiso con la calidad, la seguridad y la alegría.

Somos más que una tienda de juguetes; somos un lugar donde los sueños cobran vida y las sonrisas nunca faltan. ¡Te invitamos a explorar nuestra colección y descubrir la magia del juego con nosotros!
    </p>
   </div> 
  </div> 
);
};

export default Informacion;








