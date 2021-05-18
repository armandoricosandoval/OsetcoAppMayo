import {NavLink} from 'react-router-dom'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'



const Navigation = () => {
      return (
            <Navbar collapseOnSelect expand='lg' variant='dark' bg='dark' >
               <Navbar.Brand  as={NavLink} to="/"> Osetco s.a</Navbar.Brand>
               <Navbar.Toggle arial-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                      <Nav.Link as={NavLink} to="/admin/users">
                            Usuarios
                      </Nav.Link>
                </Nav> 
                <Nav>
                      <Nav.Link as={NavLink} to="/login">Iniciar Sesion</Nav.Link>
                      <Nav.Link as={NavLink} to="/usuario">Mi Cuenta</Nav.Link>
                      <Nav.Link as={NavLink} to="/vehiculo">Mi Vehiculo</Nav.Link>
                      <Nav.Link as={NavLink} to="/propietario">Propietario</Nav.Link>
                </Nav>      
               </Navbar.Collapse>                
            </Navbar>
      )
}

export default Navigation