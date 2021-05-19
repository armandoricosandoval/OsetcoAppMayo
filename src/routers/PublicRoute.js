import { Redirect, Route } from 'react-router-dom'
import useAuth from '../auth/useAuth'


const PublicRoute = (props) => {
      const {user} = useAuth()

      if(user)return <Redirect to="/"/>
      return (
          <Route {...props}/>         
      )
}

export default PublicRoute
