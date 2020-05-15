import React, { Component } from 'react';
import * as api from '../services/api';
import '../style/CategoryBar.css';

export default class CategoryBar extends Component {
  constructor(props) {
    super(props);
    this.state = { categoryList: [] };
  }


  componentDidMount() {
    api.getCategories().then((categoryList) => this.setState({ categoryList }));
  }


  render() {
    const { categoryList } = this.state;
    const { setCategory } = this.props;
    return (
      <div className="category-wrap">
        <p>Categorias: </p>
        {categoryList.map((cat) => (
          <label key={cat.id} htmlFor="input">
            {cat.name}
            <input
              type="radio"
              name="cat"
              value={cat.id}
              data-testid="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
          </label>
        ))}


      </div>
    );
  }
}
