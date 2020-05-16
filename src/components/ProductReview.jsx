import React, { Component } from 'react';

class ProductReview extends Component {
  render() {
    const { title, price, thumbnail, qtd } = this.props;

    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{qtd}</p>
        <img alt={title} src={thumbnail} />
      </div>
    );
  }
}

export default ProductReview;
