import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import EmptyCart from './components/EmptyCart';
import ShoppingCart from './pages/ShoppingCart';
import SearchItems from './components/SearchItems';
import './App.css';
import CategoryBar from './components/CategoryBar';
import AvaliationForm from './components/AvaliationForm';


function App() {
  return (

    <BrowserRouter>
      <div className="app">
        <Route path="/pages/shopping-cart" component={ShoppingCart} />
        <CategoryBar />
        <EmptyCart />
        <SearchItems />
        <AvaliationForm />
      </div>
    </BrowserRouter>


  );
}

export default App;
