

import { Link } from "react-router-dom";
import "../styles/producto.css";
import { BotonVolver } from "./componentBotones";

function Card({ producto }) {
  const estaAgotado = producto.estado === "agotado";

  return (

    
    <div className="col-md-4 col-sm-6 d-flex justify-content-center">
      <div className={`card ${estaAgotado ? "card-agotado" : ""}`}>
        <div className="imagen-container">
          {estaAgotado && (
            <span className="etiqueta-agotado">AGOTADO</span>
          )}
          <img
            src={producto.imagen}
            className="card-img-top"
            alt={producto.name}
          />
        </div>

        <div className="card-body d-flex flex-column justify-content-between text-center">
          <h5 className="card-title">{producto.name}</h5>
          <p className="precio fw-bold">$ {producto.price}</p>

          <BotonVolver
            as={Link}
            to={estaAgotado ? "#" : `/producto/${producto.id}`}
            disabled={estaAgotado}
            className={estaAgotado ? "btn-desactivado" : ""}
            onClick={(e) => {
              if (estaAgotado) e.preventDefault();
            }}
          >
            Ver detalle
          </BotonVolver>
        </div>
      </div>
    </div>
     
  );
 
}

export default Card;

