import React, { Component } from 'react';
import ProductCart from '../components/ProductCart';


class Cart extends Component {
  render() {
    const { shoppingCart } = this.props;
    if (shoppingCart.length === 0) {
      return (
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
      );
    }

    return (
      <div>
        <p>Carrinho de Compras</p>
        {shoppingCart.map(({ item: { title, thumbnail, price, availableQuantity }, qty: qtd }) => (
          <ProductCart
            key={title}
            title={title}
            thumbnail={thumbnail}
            price={price}
            qtd={qtd}
            availableQuantity={availableQuantity}
          />
        ))}

      </div>
    );
  }
}

export default Cart;
