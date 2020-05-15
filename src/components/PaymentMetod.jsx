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


  renderVisa() {
    return (
      <label htmlFor="boleto">
        Visa
        <input
          type="radio"
          name="radio"
          value="visa"
          onChange={(e) => this.setState({ checked: e.target.value })}
        />
      </label>
    );
  }

  renderBoleto() {
    return (
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

    );
  }

  renderMastercard() {
    return (
      <label htmlFor="boleto">
        MasterCard
        <input
          type="radio"
          name="radio"
          value="mastercard"
          onChange={(e) => this.setState({ checked: e.target.value })}
        />
      </label>
    );
  }

  renderElo() {
    return (
      <label htmlFor="boleto">
        Elo
        <input
          type="radio"
          name="radio"
          value="elo"
          onChange={(e) => this.setState({ checked: e.target.value })}
        />
      </label>
    );
  }


  render() {
    return (
      <div className="payment-method">
        <p>Método de pagamento</p>
        {this.renderVisa()}
        {this.renderBoleto()}
        {this.renderMastercard()}
        {this.renderElo()}


        <button type="button" onClick={this.handleClick}>Send</button>

      </div>
    );
  }
}
