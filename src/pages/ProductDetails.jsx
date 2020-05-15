import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AvaliationForm from '../components/AvaliationForm';
import QuantitySelector from '../components/QuantitySelector';
import FreeShipping from '../components/FreeShipping';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { quantidade: 0 };
    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(quantidade) {
    this.setState({ quantidade });
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { price, title, thumbnail, attributes, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    console.log(freeShipping);
    return (
      <div className="product-detail">
        <div className="product-detail-header">
          <Link to="/">Voltar</Link>
          <h3 data-testid="product-detail-name">{`${title} R$ ${price}`}</h3>
        </div>
        <div className="product-detail-img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="product-detail-specs">
          <h3>Especificações técnicas</h3>
          {attributes.map((att) => (
            <li key={att.name}>{`${att.name} : ${att.value_name}`}</li>
          ))}
        </div>
        <div data-testid="free-shipping">
          {freeShipping && <FreeShipping />}
        </div>
        <QuantitySelector setQuantity={this.setQuantity} />
        <AvaliationForm />
      </div>
    );
  }
}

export default ProductDetails;
