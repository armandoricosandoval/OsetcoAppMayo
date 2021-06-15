import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'


const PrivateRoute = ({hasRole: role, ...rest}) => {
      const {hasRole, isLogged} = useAuth()

      if(role && !hasRole(role) )return <Redirect to="/login"/>
      if(!isLogged())return <Redirect to="/"/>
      return (
          <Route {...rest}/>         
      )
}

export default PrivateRoute
