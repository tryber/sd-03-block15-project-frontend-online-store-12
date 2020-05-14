import React, { Component } from 'react';
import RateStar from './RateStar';


export default class AvaliationForm extends Component {
  constructor(props) {
    super(props);

    this.state = { rate: 0 };
    this.setRate = this.setRate.bind(this);
  }

  setRate(rate) {
    this.setState({ rate });
  }

  render() {
    const { rate } = this.state;
    return (
      <div className="form-wrap">
        <h1>Avaliações</h1>
        <div>
          <form>
            <form onSubmit={this.handleSubmit}>
              <input type="text" />
              <div className="stars-wrap">
                <RateStar rate={rate} index={1} onClick={() => this.setRate(1)} />
                <RateStar rate={rate} index={2} onClick={() => this.setRate(2)} />
                <RateStar rate={rate} index={3} onClick={() => this.setRate(3)} />
                <RateStar rate={rate} index={4} onClick={() => this.setRate(4)} />
                <RateStar rate={rate} index={5} onClick={() => this.setRate(5)} />
              </div>
              <textarea data-testid="product-detail-evaluation" type="text" />
              <button type="submit">Submit</button>
            </form>


          </form>
        </div>

      </div>
    );
  }
}
