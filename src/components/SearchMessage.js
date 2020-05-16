import React, { Component } from 'react';
import * as api from '../services/api';

class SearchMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '', selectedCategory: ' ' };
    this.getItems = this.getItems.bind(this);
  }


  componentDidUpdate(prevProps) {
    const { selectedCategory } = this.props;
    if (prevProps.selectedCategory !== selectedCategory) {
      this.fakeSetState(selectedCategory);
    }
  }

  async getItems() {
    const { items } = this.props;
    const { search, selectedCategory } = this.state;
    const products = await api.getProductsFromCategoryAndQuery(selectedCategory, search);
    items({ products: products.results });
  }

  fakeSetState(selectedCategory) {
    this.setState({ selectedCategory }, () => this.getItems());
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

          <p data-testid="home-initial-message">
            {search.length === 0 ? 'Digite algum termo de pesquisa ou escolha uma categoria.' : null}
          </p>

        </div>
      </div>
    );
  }
}

export default SearchMessage;
