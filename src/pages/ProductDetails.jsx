import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AvaliationForm from '../components/AvaliationForm';
import QuantitySelector from '../components/QuantitySelector';

export class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = { quantidade: 0 };
    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(quantidade) {
    this.setState({ quantidade });
  }

  render() {
    const { quantidade } = this.state;
    const { location: { state: { product } }, setItemToCart } = this.props;
    const { id, price, title, thumbnail, attributes } = product;
    return (
      <div className="product-detail">
        <div className="product-detail-header">
          <Link to="/">Voltar</Link>
          <h3 data-testid="product-detail-name">
            {title}
            R$
            {price}
          </h3>
        </div>
        <div className="product-detail-img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="product-detail-specs">
          <h3>Especificações técnicas</h3>
          {attributes.map((att) => (
            <li key={att.name}>
              {att.name}
              :
              {' '}
              {att.value_name}
            </li>
          ))}
        </div>
        <QuantitySelector setQuantity={this.setQuantity} />
        <button
          type="button"
          onClick={() => setItemToCart({ id, title, thumbnail, price }, quantidade)}
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <AvaliationForm />
      </div>
    );
  }
}

export default ProductDetails;
