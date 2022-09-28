import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar';
import { BrowserRouter ,Route,Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import Design from "./pages/Design";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Houses from './pages/Houses';
import Apartments from './pages/Apartments';
import Flats from './pages/Flats';
import AboutUs from './pages/About';
import styled from 'styled-components';
import MyForm from './components/accountBox/Form';
import ApartmentImages from './pages/ApartmentImages';
const AppContainer = styled.div`
  width:100%;
  height:500%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  `;

const App = () => {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Home}></Route>
    <Route path="/aboutus" exact component={AboutUs}></Route>
    <Route path="/products" exact component={Products}></Route>
    <Route path="/services" exact component={Services}></Route>
    <Route path="/marketing" exact component={Marketing}></Route>
    <Route path="/development" exact component={Development}></Route>
    <Route path="/design" exact component={Design}></Route>
    <Route path="/signup" exact component={Signup} ><MyForm/></Route>
    <Route path="/houses" exact component={Houses}></Route>
    <Route path="/apartments" exact component={Apartments}><ApartmentImages/></Route>
    <Route path="/flats" exact component={Flats}></Route>
    </Switch>
    </BrowserRouter>
    </div>
  );
}
export default App;
   /*<Route path="./signup" component={Signup}></Route>
    <Route path="./design" component={Design}></Route>
    <Route path="./development" component={Development}></Route>
    <Route path="./marketing" component={Marketing}></Route>*/
