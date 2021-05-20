import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'


const PrivateRoute = ({hasRole: role, ...rest}) => {
      const {hasRole, isLogged} = useAuth()

      if(role && !hasRole(role) )return <Redirect to="/"/>
      if(!isLogged())return <Redirect to="/login"/>
      return (
          <Route {...rest}/>         
      )
}

export default PrivateRoute
