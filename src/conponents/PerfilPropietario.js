import React from "react";
import "./css/user.css";

const PerfilPropietario = () => {
  return (
    <div className="container">
    <h4>Datos Personales</h4>
      <form className="row g-3">      
        <div className="col-md-3">
          <label for="inputCC" className="form-label">
            Cedula
          </label>
          <input type="number" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-3">
          <label for="inputNombre" className="form-label">
            Nombre
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-3">
          <label for="inputApellido" className="form-label">
            Apellido
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>     
        <div className="col-md-3">
          <label for="inputRh" className="form-label">
            Fecha de Nacimiento
          </label>
          <input type="text" className="form-control" id="inputRh" />
        </div>
        <div className="col-3">
          <label for="inputAddress" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div> 
        <div className="col-md-3">
          <label for="inputTel" className="form-label">
            Celular
          </label>
          <input type="number" className="form-control" id="inputEmail4" />
        </div>            
        <div className="col-md-3">
          <label for="inputNombre" className="form-label">
            Correo Electronico
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>                      
      </form> 
      <br></br> 
      <h4>Datos Vehiculo</h4>
      <form className="row g-3">      
        <div className="col-md-3">
          <label for="inputCC" className="form-label">
            Licencia Transito
          </label>
          <input type="number" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-3">
          <label for="inputNombre" className="form-label">
            % de propiedad vehiculo
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-3">
          <label for="inputApellido" className="form-label">
            Fecha vinculacion Contractual
          </label>
          <input type="text" className="form-control" id="inputEmail4" />
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
      
      <div className="row g-6">
      <div className="col-3">
          <button type="submit" className="btn btn-primary">
            Guardar
          </button>
          </div>
        </div>
    </div>
  );
};

export default PerfilPropietario;
