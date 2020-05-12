import React, { Component } from 'react';
import * as api from '../services/api';
import '../style/CategoryBar.css';

export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }


  async componentDidMount() {
    const categoryList = await api.getCategories();
    this.callState(categoryList);
  }

  callState(state) {
    this.setState({ categoryList: state });
  }

  render() {
    const { categoryList } = this.state;
    return (
      <div className="category-wrap">
        <p>Categorias: </p>
        {categoryList.map((cat) => <p data-testid="category" key={cat}>{cat}</p>)}
      </div>
    );
  }
}
