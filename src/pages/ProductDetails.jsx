import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AvaliationForm from '../components/AvaliationForm';
import QuantitySelector from '../components/QuantitySelector';

<<<<<<< HEAD
export class ProductDetails extends Component {
=======
class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { quantidade: 0 };
    this.setQuantity = this.setQuantity.bind(this);
  }

  setQuantity(quantidade) {
    this.setState({ quantidade });
  }

>>>>>>> 4845797302e34fda22e8f35124009c6d7bf61f89
  render() {
    const { location: { state: { product } } } = this.props;
    const { price, title, thumbnail, attributes, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
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
          { freeShipping && <FreeShipping /> }
        </div>
        <QuantitySelector />
        <AvaliationForm />
      </div>
    );
  }
}

export default ProductDetails;
