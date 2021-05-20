import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Switch, Route, Link } from 'react-router-dom';
import UserManagaement from './components/UserManagement';
import Table from './components/Table';
import { useHistory } from 'react-router-dom';


function App() {
  const history = useHistory();
  history.replace('/login');
  return (
    <div>
      
      
      {/*<button id = "login"><Link to="/login">Login</Link></button>*/}
      {/*<li><Link to="/dashboard">Dashboard</Link></li>*/}
      
      <Switch>
        <Route path="/login" component={Login} exact />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/userManagement" component={UserManagaement} />
        <Route path="/table" component={Table} />
      </Switch>
    </div>
  );
}

export default App;
