import React, { Component } from 'react';
import * as api from '../services/api';

class SearchMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { buscaVazia: true };
    this.getItems = this.getItems.bind(this);
  }

  async getItems() {
    const products = await api.getProductsFromCategoryAndQuery('computer', 'mouse');
    this.props.items({ products: products.results });
  }

  render() {
    return (
      <div>
        <input data-testid="query-input" />
        <button data-testid="query-button" onClick={this.getItems}>Search</button>
        <div>
          {this.state.buscaVazia && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.

            </p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchMessage;
