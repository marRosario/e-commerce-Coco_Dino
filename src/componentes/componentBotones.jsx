import styled from 'styled-components';

export const BotonVolver = styled.button`
  background-color: transparent;
  color: #7b2cbf;
  border: 2px dashed #7b2cbf;
  padding: 5px 8px;
  border-radius: 0 20px 0 20px;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-botton:10px;
  &:hover {
    background-color: #f2e7fb;
    transform: scale(1.05);
  }
`;


export const BotonPagina = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "activo",
})`
  background-color: ${({ activo }) => (activo ? "#d2b6f2" : "transparent")};
  color: ${({ activo }) => (activo ? "white" : "#7b2cbf")};
  border: 2px solid #7b2cbf;
  padding: 6px 12px;
  margin: 0 4px;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
&:hover {
 background-color: ${({ activo }) => (activo ? "#b185f5" : "#f2e7fb")};
  border-color: #d77ddf;
  color: #d044cf;
  transform: scale(1.08);
}
  
`;


export const BotonAgregar = styled.button`
  background-color: #7b2cbf;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px 0;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #5d1f93;
    transform: scale(1.05);
  }
`;

