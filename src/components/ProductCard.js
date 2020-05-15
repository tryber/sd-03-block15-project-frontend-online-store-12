import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FreeShipping from './FreeShipping';

export class ProductCard extends Component {
  render() {
    const { product, setItemToCart } = this.props;
    const { id, title, thumbnail, price, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div data-testid="product">
        <div data-testid="free-shipping">
          {freeShipping && <FreeShipping />}
        </div>
        <h4 data-testid="product-detail-name">{title}</h4>
        <h5>{id}</h5>
        <img src={thumbnail} alt={title} />
        <h5>{price}</h5>
        <button
          type="button"
          onClick={() => setItemToCart({ id, title, thumbnail, price }, 1)}
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <Link data-testid="product-detail-link" to={{ pathname: `/productdetails/${id}`, state: { product } }}>Detalhes</Link>
      </div>
    );
  }
}

export default ProductCard;
