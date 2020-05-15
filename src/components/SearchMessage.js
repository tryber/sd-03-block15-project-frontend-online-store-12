import React, { Component } from 'react';
import * as api from '../services/api';

class SearchMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
    this.getItems = this.getItems.bind(this);
  }

  async getItems() {
    const { items, categoryRef: { current: { state: { selectedCategory } } } } = this.props;
    const { search } = this.state;

    const products = await api.getProductsFromCategoryAndQuery(selectedCategory, search);
    console.log(products.results);
    items({ products: products.results });
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <input
          value={search}
          data-testid="query-input"
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        <button type="button" data-testid="query-button" onClick={this.getItems}>Search</button>
        <div>
          {search && (
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
