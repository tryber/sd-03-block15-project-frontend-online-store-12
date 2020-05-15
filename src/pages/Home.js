import React, { Component } from 'react';
import CategoryBar from '../components/CategoryBar';
import '../style/Home.css';
import ProductList from '../components/ProductList';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.category = React.createRef();
  }

  render() {
    const { setItemToCart } = this.props;
    return (
      <div className="homepage">
        <CategoryBar ref={this.category} />
        <ProductList categoryRef={this.category} setItemToCart={setItemToCart} />
      </div>
    );
  }
}
