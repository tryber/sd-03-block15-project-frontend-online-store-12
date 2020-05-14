import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';
import ProductDetails from './pages/ProductDetails';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shoppingCart: [] };
    this.setItemToCart = this.setItemToCart.bind(this);
  }

  setItemToCart(item, qty) {
    const { shoppingCart } = this.state;
    this.setState({ shoppingCart: [...shoppingCart, { item, qty }] });
  }


  render() {
    return (

      <BrowserRouter>
        <div className="App">
          <Switch>

            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/productdetails/:id" render={() => <ProductDetails />} />
            <Route exact path="/" component={Home} />

          </Switch>

        </div>
      </BrowserRouter>


    );
  }
}

export default App;
