import React, { Component } from 'react';
import CategoryBar from '../components/CategoryBar';
import '../style/Home.css';
import ProductList from '../components/ProductList';


export default class Home extends Component {
  render() {
    const { setItemToCart } = this.props;
    return (
      <div className="homepage">
        <CategoryBar />
        <ProductList setItemToCart={setItemToCart} />
      </div>
    );
  }
}
