import React,{useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const CreatePropietario = () => {
    const initialUserData = {
        firstName: "",
        lastName: "",
        cc: 0,
        dateOfBirth: "",
        address:"",
        phone:0,
        email:"",
        licencia:0,
        propiedad:"",
        fechaVinculacion:"",
      };
    
      const [values, setValues] = useState(initialUserData);
    
      const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setValues({ ...initialUserData });
      };
    
    return (
        <Container>
        <Row className="mt-5">
        <ul class="nav nav-tabs">
        <li class="nav-item">
        <Link  className="nav-link active" to="/admin/createOwner">Propietario</Link>
        </li>
        <li class="nav-item">
         <Link  className="nav-link" to="/admin/createUser">Usuario</Link>
        </li>
        <li class="nav-item">
        <Link  className="nav-link" to="/admin/createCar">Vehiculo</Link>
        </li>
        
      </ul>
      </Row>

      <Row className="mt-3">
        <Col>
        <div className="card card-outline-secondary">
            <div className="card-header">
              <h3 className="mb-0">Datos Personales</h3>
            </div>
            <div className="card-body">
      <form onSubmit={handleSubmit} className="row g-3">      
        <div className="col-md-3">
          <label  className="form-label">
            Cedula
          </label>
          <input type="number" className="form-control" 
          name="cc"
          maxLength="11"
          value={values.cc}
          onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" 
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label  className="form-label">
            Apellido
          </label>
          <input type="text" className="form-control" 
           name="lastName"
           value={values.lastName}
           onChange={handleChange}
          />
        </div>     
        <div className="col-md-3">
          <label className="form-label">
            Fecha de Nacimiento
          </label>
          <input type="text" className="form-control" 
           type="date"
           className="form-control"
           name="dateOfBirth"
           value={values.dateOfBirth}
           onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <label  className="form-label">
            Direccion Propietario
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </div> 
        <div className="col-md-3">
          <label  className="form-label">
            Celular
          </label>
          <input type="number" className="form-control" 
          type="number"
          className="form-control"
          maxLength="10"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          />
        </div>            
        <div className="col-md-3">
          <label  className="form-label">
            Correo Electronico
          </label>
          <input 
           type="email"
           className="form-control"
           name="email"
           value={values.email}
           onChange={handleChange}
          
          />
        </div>                          
      </form> 
      </div>    
      </div>    
      <br></br> 
      <div className="card card-outline-secondary">
            <div className="card-header">
              <h3 className="mb-0">Datos Vehiculo</h3>
            </div>
            <div className="card-body">
      <form onSubmit={handleSubmit} className="row g-3">   
        <div className="col-md-3">
          <label for="inputCC" className="form-label">
            Licencia Transito
          </label>
          <input type="number" className="form-control" 
           type="text"
           className="form-control"
           name="licencia"
           value={values.licencia}
           onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label for="inputNombre" className="form-label">
            % de propiedad vehiculo
          </label>
          <input  
           type="text"
           className="form-control"
           name="propiedad"
           value={values.propiedad}
           onChange={handleChange}
          />
        </div>
        <div className="col-md-3">
          <label for="inputApellido" className="form-label">
            Fecha vinculacion Contractual
          </label>
          <input 
           type="text"
           className="form-control"
           name="fechaVinculacion"
           value={values.fechaVinculacion}
           onChange={handleChange}
          
          />
        </div>     
        <div className="col-md-3">
          <label for="inputRh" className="form-label">
            Fecha de Matricula
          </label>
          <div>
          03-25-2020
          </div>
        </div>                  
      </form> 
      </div>
      </div>
    </Col>
      </Row>
      <br />
      <Row className="mt-2 justify-content-end">      
      <Button 
      type="submit" 
      className="btn btn-primary btn-lg"
      onClick={handleSubmit}
      >Guardar Información</Button>      
      </Row>   
    </Container>

    )
}

export default CreatePropietario
