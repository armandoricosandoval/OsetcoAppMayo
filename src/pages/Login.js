import React from "react";
import {Button } from "react-bootstrap";
import useAuth from "../auth/useAuth";
//import {Link, Redirect} from 'react-router-dom'

import "../conponents/css/login.css";

const usrCredencials = {
  id: 1,
  role: "regular",
};

const Login = () => {
  const { login } = useAuth();
  return (
    <>
      <div className="contentLogin">
        <div className="login-box">
          <h1>Login Osetco</h1>
          <div className="textbox">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" />
          </div>
          <div className="textbox">
            <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" />
          </div>
          <Button 
          style={{ maxWidth:'280px'}}
          size='lg'
          variant="success" 
          className="mt-1 " 
          onClick={() => login(usrCredencials)}>
          Iniciar sesion
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
