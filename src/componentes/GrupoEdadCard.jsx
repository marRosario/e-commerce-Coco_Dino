import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ninos1 from '../assets/ninos1.jpg';
import ninos2 from '../assets/ninos2.jpg';
import ninos3 from '../assets/ninos3.jpeg';
import ninos4 from '../assets/ninos4.jpg';
import "../styles/GrupoEdadCard.css";
import { Link } from 'react-router-dom';


function GrupoEdadCards() {
 const edades = [
  {
    imagen: ninos1,
    texto: 'De 0 a 2 años',
  },
  {
    imagen: ninos2,
    texto: 'De 2 a 4 años',
  },
  {
    imagen: ninos3,
    texto: 'De 5 a 7 años',
  },
  {
    imagen: ninos4,
    texto: 'Más de 8 años',
  },
];


  return (
    <div className="fondo-edad">
    <Container className="cards-por-edad">
      <Row className="justify-content-center g-4 ">
        {edades.map((grupo, idx) => (
          <Col key={idx} xs={12} sm={6} md={6}lg={4} xl={3}>
            <Link to={`/productos?edad=${encodeURIComponent(grupo.texto)}`} className="link-card-edad">
            <Card className="card-edad">
              <Card.Img className="img-edad" variant="top" src={grupo.imagen} />
              <Card.Body className="card-edad-body">
                <Card.Title className="text-center-edad">{grupo.texto}</Card.Title>
              </Card.Body>
            </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
}

export default GrupoEdadCards;
