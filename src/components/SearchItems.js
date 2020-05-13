import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchMessage from './SearchMessage';

class SearchItems extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={SearchMessage} />
        </Switch>
      </Router>
    );
  }
}

export default SearchItems;
