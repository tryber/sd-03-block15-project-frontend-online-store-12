import React, { Component } from 'react';
import SearchMessage from './SearchMessage';
import { ProductCard as Card } from './ProductCard';
import '../style/ProductList.css';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }

  lowestOrHigest(option) {
    const { products } = this.state;
    if (option.target.value === 'lowest') {
      const lowest = products.sort((prod1, prod2) => prod1.price - prod2.price);
      this.setState({ products: lowest });
    } else if (option.target.value === 'highest') {
      const lowest = products.sort((prod1, prod2) => prod2.price - prod1.price);
      this.setState({ products: lowest });
    }
  }

  render() {
    const { setItemToCart, selectedCategory } = this.props;
    const { products } = this.state;
    return (
      <div className="filter-container">
        <select className="filter-btn" onChange={(e) => this.lowestOrHigest(e)}>
          <option>No filter</option>
          <option value="lowest">Lowest price</option>
          <option value="highest">Highest price</option>
        </select>
        <SearchMessage selectedCategory={selectedCategory} items={(item) => this.setState(item)} />
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
