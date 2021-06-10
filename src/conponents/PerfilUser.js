import React, { useState } from "react";
import "./css/user.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const PerfilUser = () => {
  const initialUserData = {
    firstName: "",
    lastName: "",
    cc: 0,
    rh: "",
    dateOfBirth: "",
    address: "",
    phone: 0,
    email: "",
    licenseNumber: 0,
    categori: "",
    finishLicense: "",
    experienceYears: 0,
    expeditionPlace: "",
    licenseRestriction: "",
    drivingCourse: "",
    arl: "",
    eps: "",
    pensions: "",
    numberTrafficAccidents: "",
    paymentAgreements: "",
    value: "",
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
      <Row className="mt-3">
        <Col>
          <div className="card card-outline-secondary">
            <div className="card-header">
              <h3 className="mb-0">Datos Personales</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="row g-3">
                <div className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label">Cedula</label>
                    <input
                      type="number"
                      className="form-control"
                      name="cc"
                      maxLength="11"
                      value={values.cc}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Nombre</label>
                    <input
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={values.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Apellido</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={values.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-1">
                    <label className="form-label">RH</label>
                    <input
                      type="text"
                      className="form-control"
                      name="rh"
                      value={values.rh}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Fecha de Nacimiento</label>
                    <input
                      type="date"
                      className="form-control"
                      name="dateOfBirth"
                      value={values.dateOfBirth}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-3">
                    <label className="form-label">Direccion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={values.address}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Celular</label>
                    <input
                      type="number"
                      className="form-control"
                      maxLength="10"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">Correo Electronico</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={values.email}
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
      <Row>
        <Col>
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Datos Laborales</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label">Licencia N°</label>
                  <input
                    type="number"
                    className="form-control"
                    name="licenseNumber"
                    value={values.licenseNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Categoria</label>
                  <input
                    type="text"
                    className="form-control"
                    name="categori"
                    value={values.categori}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Vencimiento</label>
                  <input
                    type="date"
                    className="form-control"
                    name="finishLicense"
                    value={values.finishLicense}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-2">
                  <label className="form-label">Años de experiencia</label>
                  <input
                    type="number"
                    className="form-control"
                    name="experienceYears"
                    maxLength='4'
                    value={values.experienceYears}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Lugar de expedicion</label>
                  <input
                    type="text"
                    className="form-control"
                    name="expeditionPlace"
                    value={values.expeditionPlace}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Restriccion Lic.</label>
                  <input
                    type="text"
                    className="form-control"
                    name="licenseRestriction"
                    value={values.licenseRestriction}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Curso de conduccion</label>
                  <input
                    type="tex"
                    className="form-control"
                    name="drivingCourse"
                    value={values.drivingCourse}
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
      <Row>
        <Col>
        <div className="card card-outline-secondary">
          <div className="card-header">
            <h3 className="mb-0">Datos Medicos</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className="row g-3">
              <div className="row g-3">
                <div className="col-md-3">
                  <label className="form-label">ARL</label>
                  <input
                    type="text"
                    className="form-control"
                    name="arl"
                    value={values.arl}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">EPS</label>
                  <input
                    type="text"
                    className="form-control"
                    name="eps"
                    value={values.eps}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Pensiones</label>
                  <input
                    type="text"
                    className="form-control"
                    name="pensions"
                    value={values.pensions}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">N° de Accidentes de transito</label>
                  <input
                    type="number"
                    maxLength='2'
                    className="form-control"
                    name="numberTrafficAccidents"
                    value={values.numberTrafficAccidents}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-3">
                  <label className="form-label">Acuerdos de pagos</label>
                  <input
                    type="text"
                    className="form-control"
                    name="paymentAgreements"
                    value={values.paymentAgreements}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-3">
                  <label className="form-label">Valor</label>
                  <input
                    type="text"
                    className="form-control"
                    name="value"
                    value={values.value}
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
      <Row className="mt-2">
      <div className="col-3">
          <Button type="submit" className="btn btn-primary">
            Guardar
          </Button>
          </div>
      </Row>     
    </Container>
  );
};

export default PerfilUser;
