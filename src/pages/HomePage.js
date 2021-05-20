import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={{span:'12'}} md={{span:6}} className='mb-5'>
             <h2>Bienvenid@ a Generacion de FUEC</h2> 
             <p>¡Aquí podras gestionar tus FUECs y actualizar tus datos!</p>
             <p>Envia tus documentos y soportes.</p>
             <div>
                   <Link to='/login'>Ingresa</Link> ó
                   <Button className="ml-2" as={Link} to='/register'>Solicita una Cuenta</Button>
             </div>
        </Col>
        <Col>
              <img 
              className='img-fluid' 
              src="/img/task-manager.svg" 
              alt="Bienvenido a Osetco S.A" />
              <p>¡Gestiona tu tiempo,Mejora tu productividad!</p>

        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
