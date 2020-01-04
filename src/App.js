import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Details from './components/Details';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Cart from './components/cart/Cart';
import Modal from './components/Modal';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
   <Router>
     <Navbar/>
     <Switch>
       <Route path='/' exact component={ProductList}/>
       <Route path='/cart' component={Cart}/>
       <Route path='/' component={Details}/>
       <Route component={Default}/>
     </Switch>
     <Modal/>
   </Router>
  );
}

export default App;
