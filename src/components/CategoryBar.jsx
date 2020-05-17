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
        <p className="category-wrap-title">Categorias: </p>
        {categoryList.map((cat) => (
          <label key={cat.id} htmlFor="input">
            <input
              type="radio"
              name="cat"
              value={cat.id}
              data-testid="category"
              onChange={(e) => setCategory(e.target.value)}

            />
            {cat.name}
            <br />
          </label>
        ))}


      </div>
    );
  }
}
