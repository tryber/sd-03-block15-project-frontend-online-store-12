import React, { Component } from 'react';
// import Link from 'react-router-dom';
import * as Api from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { product: null };
  }

  componentDidMount() {
    Api.getProductsFromCategoryAndQuery('computador', 'computador').then((results) => {
      const findProduct = results.find((e) => this.props.match.id === e.id);
      this.setState({ product: findProduct });
    });
  }

  render() {
    const { title, thumbnail, price, attributes } = this.state.product;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{title}</h3>
          <h4>{price}</h4>
          <img src={thumbnail} alt="/" />
          <div>
            <ul>
              {attributes.map((e) => <li>{`${e.name} : ${e.value_name}`}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetails;
