import React, { Component } from 'react';


class EmptyCart extends Component {
  constructor(props) {
    super(props);
    this.state = { isCartEmpty: true };
  }
}

export default EmptyCart;
