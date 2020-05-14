import React, { Component } from 'react';
import SearchMessage from './SearchMessage';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    return (
      <div>
        {this.state.products.length && this.state.products.map((product) => (
          <p data-testid="product" key={product.id}>{product.title}</p>
        ))}
        <SearchMessage items={(xablau) => this.setState(xablau)} />
      </div>
    );
  }
}

export default ProductList;
