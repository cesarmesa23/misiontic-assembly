import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, 
  Route, 
  Switch,
  Redirect,
} from "react-router-dom";

import Footer from "./Shared/components/Footer";
import Header from "./Shared/components/Header";
import GestionUsuarios from "./GestionUsuarios/pages/GestionUsuarios";
import ListadoProductos from "./ListadoProductos/pages/ListadoProductos";
import ListadoVentas from "./ListadoVentas/pages/ListadoVentas";
import Login from "./Login/pages/Login";
import RegistroProductos from "./RegistroProductos/pages/RegistroProductos";
import RegistroVentas from "./RegistroVentas/pages/NuevaVenta";

const App = () => {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Login/>
        </Route>
        <Route path="/GestionUsuarios" exact>
          <GestionUsuarios/>
        </Route>
        <Route path="/ListadoProductos" exact>
          <ListadoProductos/>
        </Route>
        <Route path="/ListadoVentas" exact>
          <ListadoVentas/>
        </Route>
        <Route path="/RegistroProductos" exact>
          <RegistroProductos/>
        </Route>
        <Route path="/RegistroVentas" exact>
          <RegistroVentas/>
        </Route>
        
        <Redirect to="/"/>
      </Switch>
      <Footer/>
   </Router>
  );
}

export default App;
