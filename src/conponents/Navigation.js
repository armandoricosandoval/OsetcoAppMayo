import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import useAuth from "../auth/useAuth";

const Navigation = () => {
  const { logout } = useAuth();

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      variant="dark"
      style={{ backgroundColor: "green" }}
    >
      <Navbar.Brand as={NavLink} to="/">
        {" "}
        Osetco s.a
      </Navbar.Brand>
      <Navbar.Toggle arial-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Admin" id="basic-nav-dropdown">
          <NavDropdown.Item as={NavLink} to="/admin/users">Administradores</NavDropdown.Item>
          <NavDropdown.Item as={NavLink} to="/admin/createOwner">Crear Propietario</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/admin/createUser">Crear Usuario</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/admin/createCar">Crear Vehiculo</NavDropdown.Item>           
          </NavDropdown>          
        </Nav>
        <Nav>
          <Nav.Link as={NavLink} to="/login">
            Iniciar Sesion
          </Nav.Link>
          <Nav.Link as={NavLink} to="/usuario">
            Mi Cuenta
          </Nav.Link>
          <Nav.Link as={NavLink} to="/vehiculo">
            Mi Vehiculo
          </Nav.Link>
          <Nav.Link as={NavLink} to="/propietario">
            Propietario
          </Nav.Link>
          <Nav.Link to="/login" onClick={logout}>
            Cerrar Sesion
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
