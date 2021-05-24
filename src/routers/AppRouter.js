import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '../conponents/layouts/Layout'
import HomePage from '../pages/HomePage';
import Login from '../pages/Login';
import AccountUser from './../pages/accountPages/AccountUser';
import AccountCar from './../pages/accountPages/AccountCar';
import AccountOwner from './../pages/accountPages/AccountOwner';
import Fuec from '../pages/Fuec';
import Payroll from '../pages/Payroll';
import Preoperative from '../pages/Preoperative';
import Admin from '../pages/admin/Admin';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import User from '../conponents/User';



const AppRouter = () => {
      return (
            <Router>
                  <Layout>
                        <Switch>
                              <Route exact path="/" component={HomePage} />
                              <PublicRoute exact path="/login" component={Login} />
                              <PrivateRoute exact path="/usuario" component={AccountUser} />
                              <PrivateRoute exact path="/vehiculo" component={AccountCar} />
                              <PrivateRoute exact path="/propietario" component={AccountOwner} />
                              <PrivateRoute exact path="/fuec" component={Fuec} />
                              <PrivateRoute exact path="/pagos" component={Payroll} />
                              <PrivateRoute exact path="/perfilUsuario" component={User} />
                              <Route exact path="/preoperativo" component={Preoperative} />
                              <PrivateRoute hasRole={roles.admin} exact path="/admin/users" component={Admin} />
                              <Route path="*" component={NotFoundPage} />
                        </Switch>
                  </Layout>
            </Router>
      )
}

export default AppRouter