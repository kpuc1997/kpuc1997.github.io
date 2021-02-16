import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { NavDropdown,
  Spinner, } from 'react-bootstrap';
import { 
  KNavbar,
  KNavLink,
  KNavRoute } from './components/navbar/KNavbar';


function App() {
  return (
    <Router hashType='noslash' basename={process.env.PUBLIC_URL + '/'}>
      <KNavbar brand={"KC"} >
        <KNavLink url={"/resume"} name={'Resume'} key={'resume'}/>
        <KNavLink url={"/blog"} name={'Blog'} key={'blog'}/>
        <KNavLink url={"/contact"} name={'Contact'} key={'contact'}/>
      </KNavbar>
    </Router>
  );
}

export default App;
