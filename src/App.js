import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';
import { ProductDetails } from './pages/ProductDetails';


function App() {
  return (

    <BrowserRouter>
      <div className="App">

        <Switch>
          <Route path="/pages/shopping-cart" component={ShoppingCart} />
          <Route path="/productdetails/:id" component={ProductDetails} />
          <Route exact path="/" component={Home} />
        </Switch>


      </div>
    </BrowserRouter>
  );
}

export default App;
