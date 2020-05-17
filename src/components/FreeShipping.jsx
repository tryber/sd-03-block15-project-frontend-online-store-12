import React, { Component } from 'react';
import { FaShippingFast } from 'react-icons/fa';

export default class FreeShipping extends Component {
  render() {
    return (
      <div>
        <FaShippingFast />
        <p data-testid="free-shipping">Frete Grátis!</p>
      </div>
    );
  }
}
