import React from 'react'
import './App.css';
import Addproducts from './components/Addproducts';
import ShowProducts from './components/ShowProducts';
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom'
import NavBarMenu from './components/NavBarMenu';
import UpdateProduct from './components/UpdateProduct';
import ProductDetail from './components/ProductDetail';

function App() {
  return (
    <div className="App">
     <Router>
         <NavBarMenu />
       <Switch>
         <Route exact path='/' component={ShowProducts} />
         <Route exact path='/addproducts' component={Addproducts} />
         <Route exact path='/:id/' component={ProductDetail} />
         <Route exact path='/:id/update' component={UpdateProduct} />
       </Switch>  
     </Router>
    </div>
  );
}

export default App;
