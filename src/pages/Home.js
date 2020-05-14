import React, { Component } from 'react';
import SearchItems from '../components/SearchItems';
import CategoryBar from '../components/CategoryBar';


export default class Home extends Component {
  render() {
    return (
      <div>
        <CategoryBar />
        <SearchItems />
      </div>
    );
  }
}
