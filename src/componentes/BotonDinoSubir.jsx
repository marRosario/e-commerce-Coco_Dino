import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

// Animación de rebote
const saltar = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`;

const DinoBoton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: none;
  border: none;
  font-size: 2.2rem;
  cursor: pointer;
  z-index: 1000;
  animation: ${saltar} 1.5s infinite;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
  transition: opacity 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
    .texto-subir{
    font-size: 1rem;
    color: red;
    font-family: 'Quicksand', sans-serif;
    animation: none;
    }
`;

function BotonDinoSubir() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  const subir = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <DinoBoton onClick={subir} $visible={visible} aria-label="Volver arriba">
      🦕 <span className="texto-subir">subir</span>
    </DinoBoton>
  );
}

export default BotonDinoSubir;
