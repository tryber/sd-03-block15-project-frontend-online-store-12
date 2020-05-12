import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

class EmptyCart extends Component {
  constructor(props) {
    super(props);
    this.state = { isCartEmpty: true };
  }


  render() {
    const { isCartEmpty } = this.state;
    if (isCartEmpty) {
      return (
        <div>
          <FaShoppingCart size={32} data-testid="shopping-cart-button" />
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }
    return (
      <div>
        <FaShoppingCart data-testid="shopping-cart-button" />
      </div>
    );
  }
}

export default EmptyCart;
