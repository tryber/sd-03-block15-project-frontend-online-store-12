import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { FiShoppingCart } from 'react-icons/fi';

class ButtonCart extends Component {
  constructor(props) {
    super(props);
    this.state = { redirect: false };
    this.stateChange = this.stateChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  stateChange() {
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;

    if (redirect) {
      return <Redirect to="/cart" />;
    }
    return (
      <form>
        <button
          data-testid="shopping-cart-button"
          type="submit"
          className="btn btn-outline-success"
          onClick={() => this.stateChange()}
        >
          <FiShoppingCart size="25" />
        </button>
      </form>
    );
  }
}

export default ButtonCart;
