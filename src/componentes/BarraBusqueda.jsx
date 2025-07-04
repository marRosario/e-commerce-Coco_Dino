
import { useContext } from "react";
import { BusquedaContext } from "../contexts";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";


const InputBusqueda = styled.input`
  padding: 4px 6px;
  border: 2px solid #7b2cbf;
  border-radius: 30px;
  font-size: 1rem;
  outline: none;
  width: auto;
  max-width: 180px;
  flex-shrink: 0;
  transition: all 0.3s ease;

  &::placeholder {
    color: #b185f5;
  }

  &:focus {
    box-shadow: 0 0 0 3px #e5d1fa;
  }
`;

const ContenedorBusqueda = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  flex: 0 0 auto;
`;


function BarraBusqueda() {
  const { terminoBusqueda, setTerminoBusqueda } = useContext(BusquedaContext);
const navigate = useNavigate();
  const location = useLocation();
  
const handleChange = (e) => {
    const valor = e.target.value;
    setTerminoBusqueda(valor);
    if (location.pathname !== "/productos") {
      navigate("/productos");
    }
  };

  
  return (
    <InputBusqueda
      type="text"
      placeholder="Buscar productos..."
      value={terminoBusqueda}
      onChange={handleChange}
    />
  );
}

export default BarraBusqueda;
