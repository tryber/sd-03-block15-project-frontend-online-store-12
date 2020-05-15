import React, { Component } from 'react';

export default class PaymentMetod extends Component {
  constructor(props) {
    super(props);

    this.state = { checked: 'boleto' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.state;
  }


  render() {
    return (
      <div className="payment-method">
        <p>Método de pagamento</p>
        <label htmlFor="boleto">
          Boleto
          <input
            type="radio"
            name="radio"
            value="boleto"
            checked
            onChange={(e) => this.setState({ checked: e.target.value })}
          />
        </label>
        <label htmlFor="boleto">
          Visa
          <input
            type="radio"
            name="radio"
            value="visa"
            onChange={(e) => this.setState({ checked: e.target.value })}
          />
        </label>
        <label htmlFor="boleto">
          MasterCard
          <input
            type="radio"
            name="radio"
            value="mastercard"
            onChange={(e) => this.setState({ checked: e.target.value })}
          />
        </label>
        <label htmlFor="boleto">
          Elo
          <input
            type="radio"
            name="radio"
            value="elo"
            onChange={(e) => this.setState({ checked: e.target.value })}
          />
        </label>
        <button type="button" onClick={this.handleClick}>Send</button>

      </div>
    );
  }
}
