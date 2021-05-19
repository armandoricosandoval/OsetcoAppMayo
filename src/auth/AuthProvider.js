import {createContext,useState} from 'react'
import roles from '../helpers/roles'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
const [user, setUser] = useState({id:1,roles:roles.regular})

      const contextValue = {
            user
      }
      return (
            <AuthContext.Provider value={contextValue} >
                {children}  
            </AuthContext.Provider>
      )
}

export default AuthProvider
