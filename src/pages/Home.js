import React, { Component } from 'react';
import SearchItems from '../components/SearchItems';
import CategoryBar from '../components/CategoryBar';
import '../style/Home.css';


export default class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <CategoryBar />
        <SearchItems />
      </div>
    );
  }
}
