import React from 'react'
import './App.css';
import Addproducts from './components/Addproducts';
import ShowProducts from './components/ShowProducts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBarMenu from './components/NavBarMenu';


function App() {
  return (
    <div className="App">
     <Router>
         <NavBarMenu />
       <Switch>
         <Route exact path='/' component={ShowProducts} />
         <Route path='/addproducts' component={Addproducts} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
