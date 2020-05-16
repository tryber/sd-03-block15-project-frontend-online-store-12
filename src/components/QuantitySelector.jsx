import React, { Component } from 'react';
import '../style/QuantitySelector.css';

export default class QuantitySelector extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.dec = this.dec.bind(this);
    this.inc = this.inc.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidUpdate(prevProps, prevStates) {
    if (prevStates.count !== this.state.count) {
      const { count } = this.state;
      const { setQuantity } = this.props;
      setQuantity(count);
    }
  }

  dec() {
    const { count } = this.state;
    if (count > 0) {
      this.setState({ count: count - 1 });
    }
  }

  inc() {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  addToCart() {
    const { setItemToCart, product: { id, title, thumbnail, price } } = this.props;
    const { count } = this.state;
    setItemToCart({ id, title, thumbnail, price }, count);
  }

  render() {
    const { count } = this.state;
    return (
      <div className="quantity-wrap">

        <h2>Quantidade</h2>
        <div className="buttons-wrap">
          <button onClick={this.dec} type="button">menos</button>
          <p>{count}</p>
          <button onClick={this.inc} type="button">mais</button>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={this.addToCart}
          >
            Add To Cart
          </button>
        </div>

      </div>
    );
  }
}
