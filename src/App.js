import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { 
  NavDropdown,
  Spinner, } from 'react-bootstrap';
import { 
  KNavbar,
  KNavLink,
  KNavRoute } from './components/navbar/KNavbar';

import {
  Home,
  Admin,
} from './pages/pages.js';
import React from "react";

class App extends React.Component {
  render() {
    return (
      <Router hashType='noslash' basename={process.env.PUBLIC_URL + '/'}>
        <KNavbar brand={"KC"} >
          <KNavLink url={"/resume"} name={'Resume'} key={'resume'}/>
          <KNavLink url={"/blog"} name={'Blog'} key={'blog'}/>
          <KNavLink url={"/contact"} name={'Contact'} key={'contact'}/>
        </KNavbar>
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path='/admin'><Admin /></Route>
        </Switch>
      </Router>
  )};
}

export default App;
