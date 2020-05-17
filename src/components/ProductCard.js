import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FreeShipping from './FreeShipping';
import '../style/ProductCard.css';

export class ProductCard extends Component {
  render() {
    const { product, setItemToCart } = this.props;
    const { id, title, thumbnail, price, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <div className="product-card-container" data-testid="product">
        <div className="product-card-left">
          <img className="product-card-thumbnail" src={thumbnail} alt={title} />
        </div>
        <div className="product-card-right">
          <div className="product-card-shipping" data-testid="free-shipping">
            {freeShipping && <FreeShipping />}
          </div>
          <h4 className="product-card-title" data-testid="product-detail-name">{title}</h4>
          <h5 className="product-card-id">{id}</h5>
          <h5 className="product-card-price">{`R$ ${price}`}</h5>
          <Link className="product-card-link  " data-testid="product-detail-link" to={{ pathname: `/productdetails/${id}`, state: { product } }}>Detalhes</Link>
          <button
            className="product-card-btn"
            type="button"
            onClick={() => setItemToCart({ id, title, thumbnail, price }, 1)}
            data-testid="product-add-to-cart"
          >
            Adicionar ao Carrinho
          </button>
        </div>
      </div>
    );
  }
}

export default ProductCard;
