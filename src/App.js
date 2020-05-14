import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EmptyCart from './components/EmptyCart';
import ShoppingCart from './pages/ShoppingCart';
import SearchItems from './components/SearchItems';
import './App.css';
import CategoryBar from './components/CategoryBar';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ProductDetails />
        <Route path="/pages/shopping-cart" component={ShoppingCart} />
        <EmptyCart />
        <CategoryBar />
        <SearchItems />
      </div>
    </BrowserRouter>


  );
}

export default App;
