import React, { Component } from 'react';
import EmptyCart from '../components/EmptyCart';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { cart: [] };
  }

  render() {
    const { cart } = this.state;
    if (cart.length === 0) return (<EmptyCart />);
    return (
      <div>
        <p>Test Blank Page</p>
      </div>
    );
  }
}

export default Cart;
