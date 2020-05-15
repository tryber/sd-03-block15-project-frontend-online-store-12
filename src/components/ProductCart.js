import React, { Component } from 'react';

class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qtd: props.qtd,
      preco: props.price * this.state.qtd,
    };
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  addOne() {
    this.setState({ qtd: this.state.qtd + 1 });
  }

  minusOne() {
    if (this.state.qtd > 0) {
      this.setState({ qtd: this.state.qtd - 1 });
    }
  }

  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p>{this.state.qtd}</p>
        <button data-testid="product-increase-quantity" onClick={this.addOne}>+1</button>
        <button data-testid="product-decreate-quantity" onClick={this.minusOne}>-1</button>
        <img alt={title} src={thumbnail} />
      </div>
    );
  }
}

export default ProductCart;
