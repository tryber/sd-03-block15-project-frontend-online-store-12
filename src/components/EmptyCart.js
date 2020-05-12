import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
          <div>
            <Link to="/ShoppingCart">
              <button type="button" data-testid="shopping-cart-button">
                <FaShoppingCart size={32} />
              </button>
            </Link>
            <p>Carrinho de Compras</p>
          </div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div>
        <div>
          <Link to="/ShoppingCart">
            <button type="button" data-testid="shopping-cart-button">
              <FaShoppingCart size={32} />
            </button>
          </Link>
          <p>Carrinho de Compras</p>
        </div>
      </div>
    );
  }
}

export default EmptyCart;
