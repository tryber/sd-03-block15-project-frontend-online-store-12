import React, { Component } from 'react';

class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = { qtd: props.qtd };
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  addOne() {
    const { qtd } = this.state;
    this.setState({ qtd: qtd + 1 });
  }

  minusOne() {
    const { qtd } = this.state;
    if (qtd > 0) {
      this.setState({ qtd: qtd - 1 });
    }
  }

  render() {
    const { title, price, thumbnail } = this.props;
    const { qtd } = this.state;
    return (
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p>{qtd}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={this.addOne}
        >
          +1

        </button>
        <button
          type="button"
          data-testid="product-decreate-quantity"
          onClick={this.minusOne}
        >
          -1

        </button>
        <img alt={title} src={thumbnail} />
      </div>
    );
  }
}

export default ProductCart;
