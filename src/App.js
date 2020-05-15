import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Home from './pages/Home';
import './App.css';
import ProductDetails from './pages/ProductDetails';
import CartButton from './components/CartButton';
import PaymentPage from './pages/PaymentPage';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { shoppingCart: [] };
    this.setItemToCart = this.setItemToCart.bind(this);
  }

  setItemToCart(item, qty) {
    const { shoppingCart } = this.state;
    const isItemThere = shoppingCart.findIndex((e) => e.item.id === item.id);
    if (isItemThere >= 0) {
      console.log('dentroDoIf');
      const cart = [...shoppingCart];
      cart[isItemThere].qty += qty;
      this.setState({ shoppingCart: cart });
    } else {
      this.setState({ shoppingCart: [...shoppingCart, { item, qty }] });
    }
  }

  renderShoppingCart() {
    const { shoppingCart } = this.state;
    return (
      <Route
        path="/shopping-cart"
        render={() => (
          <ShoppingCart
            shoppingCart={shoppingCart}
          />
        )}
      />
    );
  }


  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <CartButton />
          <Switch>
            <Route path="/payment/" component={PaymentPage} />
            {this.renderShoppingCart()}

            <Route
              path="/productdetails/:id"
              render={({ location }) => (
                <ProductDetails
                  location={location}
                  setItemToCart={this.setItemToCart}
                />
              )}
            />
            <Route
              exact
              path="/"
              render={() => <Home setItemToCart={this.setItemToCart} />}
            />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
