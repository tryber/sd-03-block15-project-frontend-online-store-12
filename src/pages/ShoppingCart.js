import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';


class Cart extends Component {
  render() {
    const { shoppingCart, setItemToCart } = this.props;
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
        {shoppingCart
          .map(({ item: { id, title, thumbnail, price, availableQuantity }, qty: qtd }) => (
            <ProductCart
              key={title}
              title={title}
              thumbnail={thumbnail}
              price={price}
              qtd={qtd}
              availableQuantity={availableQuantity}
              setItemToCart={setItemToCart}
              itemID={id}
            />
          ))}
        <Link to={{ pathname: 'payment', state: { shoppingCart } }}>
          <button type="button" data-testid="checkout-products"> CheckOut</button>
        </Link>


      </div>
    );
  }
}

export default Cart;
