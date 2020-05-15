import React, { Component } from 'react';
import ProductCart from '../components/ProductCard';


class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = { shoppingCart: [] };
  }


  render() {
    const { shoppingCart } = this.state;
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
        {shoppingCart.map(({ title, thumbnail, price, qtd, availableQuantity }) => (
          <ProductCart
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
