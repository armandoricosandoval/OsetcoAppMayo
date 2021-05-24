import React from "react";
import './css/user.css'

const PerfilCar = () => {
  return (
    <div className="user-container">
      <div className="container" style={{ marginTop: '5rem' }}>
        <h4>Informacion Vehiculo</h4>
        <div className="col-md-2">
            <label for="inputRh" className="form-label">
              N° interno
          </label>
            <input type="text" className="form-control" id="inputRh" />
          </div> 
        <form className="row g-3">
        
          <div className="col-md-3">
            <label for="inputCC" className="form-label">
              Placa
          </label>
            <input type="number" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputApellido" className="form-label">
              Marca
          </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-3">
            <label for="inputAddress" className="form-label">
              Linea
          </label>
            <input type="text" className="form-control"           
            />
          </div>
          <div className="col-md-3">
            <label for="inputRh" className="form-label">
              Modelo
          </label>
            <input type="text" className="form-control" id="inputRh" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
              Cilindraje
          </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          
          <div className="col-md-3">
            <label for="inputRh" className="form-label">
              Color
          </label>
            <input type="text" className="form-control" id="inputRh" />
          </div>         
          <div className="col-md-3">
            <label for="inputTel" className="form-label">
              Clase de Vehiculo
          </label>
            <input type="number" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
              Tipo de Carroceria
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
             Tipo de combustible
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
              Capacidad de pasajeros
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
              Capacidad de Carga
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
              N° de Motor
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
              N° Chasis
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            N° de tarjetad de operacion
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            Fecha de vencimiento TO
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            N° Poliza de soat
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            Fecha de Vencimiento Soat
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            N° de poliza RCC
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            Fecha de vencimiento RCC
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            N° de poliza RCE
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            Fecha de vencimiento RCE
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            Compañia aseguradora RCE - RCC
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            N° de poliza Todo Riesgo
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            Fecha de vencimiento TR
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            Compañia aseguradora TR
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
            N° Certificado de Revision tecnicomecanica
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-3">
            <label for="inputNombre" className="form-label">
           Fecha de vencimiento Cer-Rev-Tecnicomecanica
            </label>
            <input type="text" className="form-control" id="inputEmail4" />
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
      
      
    </div>
  );
};

export default PerfilCar;
