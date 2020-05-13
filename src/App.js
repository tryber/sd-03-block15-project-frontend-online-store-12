import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import SearchItems from './components/SearchItems';
import './App.css';
import CategoryBar from './components/CategoryBar';
import QuantitySelector from './components/QuantitySelector';
import EmptyCart from './components/EmptyCart';


function App() {
  return (
    <div>
      <BrowserRouter>
        <CategoryBar />
        <SearchItems />
        <QuantitySelector />
        <EmptyCart />
      </BrowserRouter>
    </div>


  );
}

export default App;
