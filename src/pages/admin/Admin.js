import { Container, Row, Col, Button } from "react-bootstrap";
import useAuth from "../../auth/useAuth";
import { Link } from "react-router-dom";

const Admin = () => {


      return (
            <Container>
                  <Row className="mt-5">
                        <Col>

                              <div className="card card-outline-secondary">
                                    <div className="card-header">
                                          <h3 className="mb-0">Gestion de Usuarios</h3>
                                    </div>
                                    <table class="table table-striped">
                                          <thead>
                                                <tr>
                                                      <th scope="col">#</th>
                                                      <th scope="col">First</th>
                                                      <th scope="col">Last</th>
                                                      <th scope="col">Handle</th>
                                                </tr>
                                          </thead>
                                          <tbody>
                                                <tr>
                                                      <th scope="row">1</th>
                                                      <td>Mark</td>
                                                      <td>Otto</td>
                                                      <td>@mdo</td>
                                                </tr>
                                                <tr>
                                                      <th scope="row">2</th>
                                                      <td>Jacob</td>
                                                      <td>Thornton</td>
                                                      <td>@fat</td>
                                                </tr>
                                                <tr>
                                                      <th scope="row">3</th>
                                                      <td>Larry</td>
                                                      <td>the Bird</td>
                                                      <td>@twitter</td>
                                                </tr>
                                          </tbody>
                                    </table>
                              </div>
                        </Col>
                  </Row>
                  <Row className="mt-5 justify-content-md-center">
                        <Button
                              type="button"
                              className="btn btn-primary btn-lg"
                              as={Link}
                              to='/admin/createOwner'
                        >CREAR USUARIO
                        </Button>
                  </Row>

            </Container>
      )
}

export default Admin
