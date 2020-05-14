import React, { Component } from 'react';
import SearchMessage from './SearchMessage';
import { ProductCard as Card } from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    return (
      <div>
        {this.state.products.length && this.state.products.map((product) => (
          <Card data-testid="product" product={product} key={product.id} />
        ))}
        <SearchMessage items={(xablau) => this.setState(xablau)} />
      </div>
    );
  }
}

export default ProductList;
