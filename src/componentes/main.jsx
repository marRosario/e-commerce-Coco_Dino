import React from 'react'; 
import "../styles/main.css"
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import  imagen7 from '../assets/imagen7.png';
import imagen1 from '../assets/imagen1.jpeg';
import imagen2 from '../assets/imagen2.png';
import imagen3 from "../assets/imagen3.jpg";
import imagen4 from "../assets/imagen4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import GrupoEdadCards from '../componentes/GrupoEdadCard';
import "../styles/GrupoEdadCard.css";
import banda from '../assets/banda.png';
import tarjeta from "../assets/tarjeta.png"
import { Link } from "react-router-dom";
import MetodosDePago from './metodosDePago';
import ArrepentimientoYNormas from './arrepentimientoYNormas';
import Newsletter from '../componentes/Newsletter';
import dinoMegafono from "../assets/dinoMegafono.png"
import { Helmet } from 'react-helmet-async';
import BotonDinoSubir from "../componentes/BotonDinoSubir";


function Main() {  

  const promociones=[
  "🔥 45% de descuento en compras online 🔥",
  "🎁 Envío gratis en tu primera compra 🎁",
  "🚀 ¡Oferta relámpago solo por hoy! 🚀",
];

const navigate = useNavigate();

    return (  
        <main >  
           <Helmet>
        <title>Inicio – Coco-Dino</title>
        <meta name="description" content="Explorá la juguetería Coco-Dino: peluches, colores, y alegría para crecer jugando." />
      </Helmet>
           <Carousel>
        <Carousel.Item interval={1000}>
            <div className="carousel-container">
          <img className="imagen-carrusel"
           src={imagen1} 
            alt="Primera diapositiva"/>
            <div className="carousel-banner">30% OFF</div>
            </div>
         <Carousel.Caption>
            <h3>Primera infancia</h3>
            <p> de 6 a 12 meses</p>
          </Carousel.Caption>
        </Carousel.Item>
       
       
        <Carousel.Item interval={500}>
           <div className="carousel-container"> 
          <img className="imagen-carrusel"
            src={imagen2} 
            alt="Segunda diapositiva"/>
             <div className="carousel-banner">30% OFF</div>
            </div>
           <Carousel.Caption>
            <h3>Formas colores y sonidos</h3>
            <p>de 12 meses a 3 años </p>
          </Carousel.Caption>
        </Carousel.Item>
        
        
        <Carousel.Item >

            <div className="carousel-container">
          <img className="imagen-carrusel"
            src={imagen3} 
            alt="Tercera diapositiva"/>
            <div className="carousel-banner">30% OFF</div>
            </div>
          
          <Carousel.Caption>
           <h3>Todos los peluches</h3>
            <p>Divertidos para todas las edades</p>
          </Carousel.Caption>
        </Carousel.Item>
       
       
       
        <Carousel.Item>
           <div className="carousel-container" > 
          <img className="imagen-carrusel"
            src={imagen4} 
            alt="Cuarta diapositiva"/>
            <div className="carousel-banner">30% OFF</div>
            </div>
        
          <Carousel.Caption>
            <div className="carousel-leyenda">
          <h2 >El regalo más pedido</h2>
          </div>
          <div>
            <h3>3 y 6 cuotas sin interés  </h3>
            </div>
            <p>más de 4 años </p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>

<section className="bienvenida">
  <h2>¡Bienvenidos a Coco-Dino!</h2>
  <p>
    Somos una juguetería creada para despertar la imaginación de los más pequeños. 
    Explorá nuestra colección de peluches, juguetes sensoriales y mucho más. 
    ¡Porque jugar es crecer con alegría!
  </p>
</section>

<div className="separador-icono">
  <img src={imagen7} alt="Icono decorativo Coco-Dino" className="logo-separador" />
</div>



<section className="valores">
  <h3>Nuestros valores</h3>
  <ul>
    <li>🎨Fomentamos la creatividad en cada juguete</li>
    <li>🛡️Priorizamos la seguridad de los niños</li>
    <li>🌍Elegimos materiales que cuidan el planeta</li>
    <li>💞Impulsamos el juego como vínculo familiar</li>
  </ul>
</section>

<div className="onda-container">
<div className="onda-decorativa">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="0.7" d="M0,96L60,128C120,160,240,224,360,250.7C480,277,600,267,720,229.3C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  
  <h2 className="titulo-sobre-onda">Productos destacados</h2>
</div>
<section className="productos-destacados">
  <div className="grid-productos">

  </div>

</section>


<div className="fondo-slider">
<section className="slider-productos">
  <Swiper
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  observeParents={true}
  observeSlideChildren={true}

    modules={[Navigation]}
    spaceBetween={10}
    slidesPerView={5}
    navigation
    grabCursor={true}
    loop={true}
    centeredSlides={true} /* Mantiene la tarjeta activa centrada */
    centerInsufficientSlides={true}
    breakpoints={{
      319: { slidesPerView: 1 ,centeredSlides:true},
      400: { slidesPerView: 2 , centeredSlides:true},
      600: { slidesPerView: 3 , centeredSlides:true},
      900: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    }}
  >
<SwiperSlide>
  <div className="tarjeta-producto">
    <video
      src="/videos/video3.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls
      className="video-producto"
    />
    <div className="franja-inferior">
 <span className="texto-promocion">{promociones[0]}</span>

    </div>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="tarjeta-producto">
  
    <video
      src="/videos/video2.mp4"
      autoPlay
      muted
      loop
      playsInline
      controls
      className="video-producto"
    />
    <div className="franja-inferior">
     <span className="texto-promocion">{promociones[1]}</span>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="tarjeta-producto">
  
    <video
      src="/videos/video1.mp4"
      autoPlay
      muted
      loop
      playsInline
     controls
      className="video-producto"
    />
    <div className="franja-inferior">
     <span className="texto-promocion">{promociones[1]}</span>
    </div>
  </div>
</SwiperSlide>




    {[...Array(9)].map((_, i) => (
      <SwiperSlide key={i}>
        <div className="tarjeta-producto">
          <img src={`/imagenes/imagen${i + 1}.png`} alt={`imagen ${i + 1}`} />
          <div className="franja-inferior">
            <span className="texto-promocion">{promociones[i % promociones.length]}</span>
          </div>
        </div>
      </SwiperSlide>
      
    ))}
  </Swiper> 

</section>
    <div className="contenedor-ver-productos">
  <button
  className="boton-ver-productos"
  onClick={() => {
    navigate("/productos");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }}
>
  Ver todos los productos
</button>
</div>

</div>
</div>

<div className="onda-container">
<div className="onda-decorativa">

  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ff5500" fillOpacity="0.7" d="M0,96L60,128C120,160,240,224,360,250.7C480,277,600,267,720,229.3C840,192,960,128,1080,117.3C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
  
  <h2 className="titulo-sobre-onda">Producto por edad</h2>
</div>
</div>
<GrupoEdadCards />


<div className="separador-icono">
  <img src={imagen7} alt="Icono decorativo Coco-Dino" className="logo-separador" />
</div>

<section className="banda-inscripcion">
  
  <div className="contenido-banda">
    <img src={banda} alt="Banda Coco-Dino" className="img-banda" />
    <div className="texto-banda">
      <div className="titulo-columna"></div>
      
      
     <h2 className="titulo-banda">
  {window.innerWidth < 600
    ? "Hacete fan de Coco-Dino"
    : "Hacete fan de Coco-Dino".split("").map((letra, i) => (
        <span key={i}>{letra === " " ? "\u00A0" : letra}</span>
      ))}
</h2>

     
     
      <div className="tarjeta-fan">
  <img src={tarjeta} alt="Tarjeta Coco-Dino Fan" className="img-tarjeta" />
      </div>
     
</div>
     
      <div className="bloque-derecho">
      <p className="orden">Completá el formulario y retirá tu tarjeta.</p>
      <div className="hashtags-banda">
        <span>#gratuita</span>
        <span>#beneficios</span>
        <span>#descuentos</span>
      </div>
      
 <Link to="/clubFan#formulario" className="boton-sacar-tarjeta">
  🦕 ¡Sacala ya!
</Link>
      
     </div>
      
    </div>
  
</section>

<MetodosDePago/>



<section className="novedades">
  <div className="franja-novedades">
    <img className="dino-megafono" src={dinoMegafono} alt="Dino anunciando" />

    <div className="contenido-superpuesto">
      <div className="textoNovedades">
        <div><span className="color-uno">ENTERATE DE</span></div>
        <div><span className="color-dos">TODAS NUESTRAS</span></div>
        <div><span className="color-tres">NOVEDADES</span></div>
      </div>

      <div className="boton-con-circulos">
        {/* Circulos izquierda */}
        <div className="circulos-laterales">
          <div className="fila-circulos">
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
          </div>
          <div className="fila-circulos">
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
          </div>
        </div>

        
        <button
          className="boton-novedades"
          onClick={() =>
            document.getElementById("newsletter").scrollIntoView({ behavior: "smooth" })
          }
        >
          QUIERO SABER
        </button>

      
        <div className="circulos-laterales">
          <div className="fila-circulos">
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
          </div>
          <div className="fila-circulos">
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
            <span className="circulo"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



<ArrepentimientoYNormas/>

<Newsletter/>

<BotonDinoSubir />
        </main>  
    );  
}  
export default Main;  