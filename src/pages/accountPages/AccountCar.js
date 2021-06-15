
import { Container, Row, Col,Card,Button } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import { Link } from "react-router-dom";

const AccountCar = () => {
      const {user}=useAuth()
      return (
            <Container>
            <Row className='mt-4'>
                  <Col xs={12} className='text-center'>
                  <img 
                  src="/img/van-passenger-y-cargo.jpg" 
                  alt="profile"
                  style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover'
                  }}
                   />
                  </Col>
                  <Col className='mt-4'>
                        <Card style={{maxWidth:'360px'}} className='mx-auto p-4'>
                             <p className='text-center'><b>Nombre: </b>{user.name}</p> 
                             <p className='text-center'><b>Tipo de Vehiculo: </b>{user.email}</p> 
                             <p className='text-center'><b>Modelo </b>{user.role}</p>
                             <Button 
                             as={Link} 
                             to='/perfilVehiculo'
                             variant="success">
                              Ver más Informacion del Vehiculo
                              </Button>
                        </Card>                              
                  </Col>
            </Row>
      </Container>
      )
}

export default AccountCar
