import React, { Component } from 'react';
import { FaShippingFast } from 'react-icons/fa';
import '../style/FreeShipping.css';


export default class FreeShipping extends Component {
  render() {
    return (
      <div className="free-shipping-container">
        <FaShippingFast />
        <p>Frete Grátis!</p>
      </div>
    );
  }
}
