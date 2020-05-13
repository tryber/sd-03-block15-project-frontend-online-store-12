import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EmptyCart from './components/EmptyCart';
import ShoppingCart from './pages/ShoppingCart';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/pages/shopping-cart" component={ShoppingCart} />
        <EmptyCart />
      </div>
    </BrowserRouter>
  );
}

export default App;
