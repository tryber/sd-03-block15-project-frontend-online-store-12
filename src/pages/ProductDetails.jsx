import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import * as Api from '../services/api';

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
          <h3 data-testid="product-detail-name">{title} - R$ {price}</h3>
        </div>
        <div className="product-detail-img">
          <img src={thumbnail} alt="" />
        </div>
        <div className="product-detail-img">
          <h3>Especificações técnicas</h3>
          {attributes.map((att) => <li>{att.name}: {att.value_name}</li>)}
        </div>
      </div>

    /*   componentDidMount() {
    Api.getProductsFromCategoryAndQuery('computador', 'computador').then((results) => {
      const findProduct = results.find((e) => this.props.match.id === e.id);
      this.setState({ product: findProduct });
    });
   */

    /* const { title, thumbnail, price, attributes } = this.state.product;
    return (
      <div>
        <div>
          <h3 data-testid="product-detail-name">{title}</h3>
          <h4>{price}</h4>
          <img src={thumbnail} alt="/" />
        </div>
        <div>
          <ul>
            {attributes.map((e) => <li>{`${e.name} : ${e.value_name}`}</li>)}
          </ul>
        </div>
        <div>
          <Link to="/shopping-cart">
            <button type="button" data-testid="shopping-cart-button">
              <FaShoppingCart size={32} />
            </button>
          </Link>
          <p>Carrinho de Compras</p>
        </div>
      </div>
    ); */
  };
}

export default ProductDetails;
