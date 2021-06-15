import React,{useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const CreateVehiculo = () => {

    const initialUserData = {
        numInterno: 0,
        placa: "",
        marca: "",
        linea: "",
        modelo: "",
        cilindraje: "",
        color: "",
        claseDeVehiculo: "",
        tipoDeCarroceria: "",
        tipoDeCombustible: "",
        capacidadDePasajeros: "",
        capacidadDeCarga: "",
        NumDeMotor: "",
        numDeChasis: "",
        numDeTarjetaDeOperacion: "",
        fechaVencimientoTO: "",
        numPolizaSOAT: "",
        fechaVencimientoSOAT: "",
        numPolizaRCC: "",
        fechaVencimientoRCC: "",
        numPolizaRCE: "",
        fechaVencimientoRCE: "",
        compañiaAseguradoraRCEoRCC: "",
        numPolizaTodoRiesgo: "",
        fechaVencimientoTR: "",
        compañiaAseguradoraTR: "",
        numCertificacionRTM: "",
        fechaVencimientoRTM: ""
      }
    
      const [values, setValues] = useState(initialUserData);
    
      const handleChange = (e) => {
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
        <Link  className="nav-link" to="/admin/createOwner">Propietario</Link>
        </li>
        <li class="nav-item">
         <Link  className="nav-link " to="/admin/createUser">Usuario</Link>
        </li>
        <li class="nav-item">
        <Link  className="nav-link active" to="/admin/createCar">Vehiculo</Link>
        </li>
        
      </ul>
      </Row>
      <Row className="mt-3">
<Col>
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3>Informacion Vehiculo</h3>
          </div>
          <div className="card-body">
            <div className="row justify-content-end">
              <div className="col-2">
                <label className="form-label">
                  N° interno
                </label>
                <label
                  className="form-control"
                  name="numInterno"
                  value={values.numInterno}
                />
              </div>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} >
               <div className="form-row">  
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Placa
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="placa"
                    value={values.placa}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Marca
                  </label>
                  <input type="text"
                    className="form-control"
                    name="marca"
                    value={values.marca}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Linea
                  </label>
                  <input type="text" className="form-control"
                    name="linea"
                    value={values.linea}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Modelo
                  </label>
                  <input type="text" className="form-control"
                    name="modelo"
                    value={values.modelo}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />              
              <div className="form-row">
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Cilindraje
                  </label>
                  <input type="text" className="form-control"
                    name="cilindraje"
                    value={values.cilindraje}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Color
                  </label>
                  <input type="text" className="form-control"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Clase de Vehiculo
                  </label>
                  <input type="text" className="form-control"
                    name="claseDeVehiculo"
                    value={values.claseDeVehiculo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Tipo de Carroceria
                  </label>
                  <input type="text" className="form-control"
                    name="tipoDeCarroceria"
                    value={values.tipoDeCarroceria}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Tipo de combustible
                  </label>
                  <input type="text" className="form-control"
                    name="tipoDeCombustible"
                    value={values.tipoDeCombustible}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Capacidad de pasajeros
                  </label>
                  <input type="number" className="form-control"
                    name="capacidadDePasajeros"
                    value={values.capacidadDePasajeros}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Capacidad de Carga
                  </label>
                  <input type="text" className="form-control"
                    name="capacidadDeCarga"
                    value={values.capacidadDeCarga}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° de Motor
                  </label>
                  <input type="text" className="form-control"
                    name="NumDeMotor"
                    value={values.NumDeMotor}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° Chasis
                  </label>
                  <input type="text" className="form-control"
                    name="numDeChasis"
                    value={values.numDeChasis}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° de tarjetad de operación
                  </label>
                  <input type="text" className="form-control"
                    name="numDeTarjetaDeOperacion"
                    value={values.numDeTarjetaDeOperacion}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Fecha de vencimiento TO
                  </label>
                  <input type="date" className="form-control"
                    name="fechaVencimientoTO"
                    value={values.fechaVencimientoTO}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° Poliza de soat
                  </label>
                  <input type="text" className="form-control"
                    name="numPolizaSOAT"
                    value={values.numPolizaSOAT}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Fecha de Vencimiento Soat
                  </label>
                  <input type="date" className="form-control"
                    name="fechaVencimientoSOAT"
                    value={values.fechaVencimientoSOAT}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° de poliza RCC
                  </label>
                  <input type="text" className="form-control"
                    name="numPolizaRCC"
                    value={values.numPolizaRCC}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Fecha de vencimiento RCC
                  </label>
                  <input type="date" className="form-control"
                    name="fechaVencimientoRCC"
                    value={values.fechaVencimientoRCC}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° de poliza RCE
                  </label>
                  <input type="text" className="form-control"
                    name="numPolizaRCE"
                    value={values.numPolizaRCE}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />
              <div className="form-row">
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Fecha de vencimiento RCE
                  </label>
                  <input type="date" className="form-control"
                    name="fechaVencimientoRCE"
                    value={values.fechaVencimientoRCE}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Compañia aseguradora RCE - RCC
                  </label>
                  <input type="text" className="form-control"
                    name="compañiaAseguradoraRCEoRCC"
                    value={values.compañiaAseguradoraRCEoRCC}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° de poliza Todo Riesgo
                  </label>
                  <input type="text" className="form-control"
                    name="numPolizaTodoRiesgo"
                    value={values.numPolizaTodoRiesgo}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Fecha de vencimiento TR
                  </label>
                  <input type="date" className="form-control"
                    name="fechaVencimientoTR"
                    value={values.fechaVencimientoTR}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <br />              
              <div className="form-row">
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Compañia aseguradora TR
                  </label>
                  <input type="text" className="form-control mt-4"
                    name="compañiaAseguradoraTR"
                    value={values.compañiaAseguradoraTR}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    N° Certificado de Revision tecnicomecanica
                  </label>
                  <input type="text" className="form-control"
                    name="numCertificacionRTM"
                    value={values.numCertificacionRTM}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-6 col-md-3">
                  <label className="form-label">
                    Fecha de vencimiento Cer-Rev-Tecnicomecanica
                  </label>
                  <input type="date" className="form-control"
                    name="fechaVencimientoRTM"
                    value={values.fechaVencimientoRTM}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
            </form>
          </div>
        </div>
        </Col>
      </Row>
      
      <br />
      <Row className="mt-2 justify-content-end">      
      <button 
      type="submit" 
      className="btn btn-primary btn-lg"
      onClick={handleSubmit}
      >Guardar Información</button>      
      </Row> 
    </Container >
    )
}

export default CreateVehiculo
