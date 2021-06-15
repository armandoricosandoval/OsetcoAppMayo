import { Container, Row, Col,Button } from "react-bootstrap";



const SolicitarCuenta = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
    <div className="card card-outline-secondary">
      <div className="card-header">
        <h3 className="mb-0">Solicitar Cuenta</h3>
      </div>
      <div className="card-body">
        <form autocomplete="off" className="form" role="form">
          <div className="form-group">
            <label for="inputName">Nombres</label> 
            <input className="form-control" id="inputName" placeholder="Full name" type="text"/>
          </div>
          <div className="form-group">
            <label for="inputEmail3">Apellidos</label> 
            <input className="form-control" placeholder="Email" required="" type="text"/>
          </div>
          <div className="form-group">
            <label for="inputPassword3">Correo</label> 
            <input className="form-control" id="inputPassword3" placeholder="Password" required="" type="email"/> 
            
          </div>
          <div className="form-group">
            <label for="inputVerify3">Cedula de Ciudadania</label> 
            <input className="form-control" id="inputVerify3" placeholder="Password (again)" required="" type="password"/>
            
          </div>
          <div className="form-group">
          <input type="file" name="archivosubido"></input>
           <medium className="form-text text-muted" id="passwordHelpBlock">Para solicitar la cuenta es necesario que adjunte fotocopia de la cedula</medium>
          </div>
          <div className="form-group">
            <Button className="btn btn-success btn-lg float-right" type="submit">Enviar</Button>
          </div>
        </form>
      </div>
    </div>
    </Col>
    </Row>
    </Container>
  );
};

export default SolicitarCuenta;
