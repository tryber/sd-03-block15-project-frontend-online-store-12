import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { product: null };
  }


  render() {
    const { price, title, thumbnail, attributes } = this.props.apiResults;
    return (
      <div className="product-detail">
        <div className="product-detail-header">
          <Link to="/">Voltar</Link>
          <h3 data-testid="product-detail-name">
            {title}
            {' '}
            - R$
            {' '}
            {price}
          </h3>
        </div>
        <div className="product-detail-img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="product-detail-img">
          <h3>Especificações técnicas</h3>
          {attributes.map((att) => (
            <li>
              {att.name}
              :
              {' '}
              {att.value_name}
            </li>
          ))}
        </div>
      </div>

    );
  }
}

export default ProductDetails;
