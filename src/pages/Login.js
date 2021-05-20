import useAuth from "../auth/useAuth"

const usrCredencials={
      id:1,
      role:'regular'
}


const Login = () => {
      const {login}= useAuth()
      return (
            <div>
                  <h1>Login</h1>
                  <button onClick={()=>login(usrCredencials)}>Iniciar sesion</button>
            </div>
      )
}

export default Login
