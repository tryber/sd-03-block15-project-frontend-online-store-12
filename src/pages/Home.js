import React, { Component } from 'react';
import CategoryBar from '../components/CategoryBar';
import '../style/Home.css';
import ProductList from '../components/ProductList';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedCategory: '' };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({ selectedCategory: category });
  }

  render() {
    const { setItemToCart } = this.props;
    const { selectedCategory } = this.state;
    return (
      <div className="homepage">
        <CategoryBar setCategory={this.setCategory} />
        <ProductList selectedCategory={selectedCategory} setItemToCart={setItemToCart} />
      </div>
    );
  }
}
