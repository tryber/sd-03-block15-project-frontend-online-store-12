import React, { Component } from 'react';

export class SearchMessage extends Component {
  constructor(props) {
    super(props);
    this.state = { buscaVazia: true };
  }

  render() {
    return (
      <div>
        <input />
        <div>
          {this.state.buscaVazia && (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.</p>
          )}
        </div>
      </div>
    );
  }
}

export default SearchMessage;
