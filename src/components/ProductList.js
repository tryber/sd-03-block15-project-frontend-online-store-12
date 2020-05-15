import React, { Component } from 'react';
import SearchMessage from './SearchMessage';
import { ProductCard as Card } from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  render() {
    const { setItemToCart, categoryRef } = this.props;
    const { products } = this.state;
    return (
      <div className="search-bar">
        <SearchMessage categoryRef={categoryRef} items={(xablau) => this.setState(xablau)} />
        {products.length && products.map((product) => (
          <Card
            data-testid="product"
            product={product}
            key={product.id}
            setItemToCart={setItemToCart}
          />
        ))}

      </div>
    );
  }
}

export default ProductList;
