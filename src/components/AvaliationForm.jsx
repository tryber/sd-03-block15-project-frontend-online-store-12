import React, { Component } from 'react';
import RateStar from './RateStar';
import Avaliation from './Avaliation';


export default class AvaliationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      rate: 0,
      message: '',
      messages: [],
    };
    this.setRate = this.setRate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Precisa de uma props chamada setItem e uma props item

  setRate(rate) {
    this.setState({ rate });
  }

  handleSubmit(e) {
    const { rate, user, message, messages } = this.state;
    e.preventDefault();
    this.setState({ messages: [...messages, { rate, user, message }], user: '', rate: 0, message: '' });
  }


  render() {
    const { rate, user, messages, message } = this.state;
    return (
      <div className="form-wrap">
        <h1>Avaliações</h1>
        <div>

          <form onSubmit={this.handleSubmit}>
            <input type="text" value={user} onChange={(e) => this.setState({ user: e.target.value })} />
            <div className="stars-wrap">
              <RateStar rate={rate} index={1} onClick={() => this.setRate(1)} />
              <RateStar rate={rate} index={2} onClick={() => this.setRate(2)} />
              <RateStar rate={rate} index={3} onClick={() => this.setRate(3)} />
              <RateStar rate={rate} index={4} onClick={() => this.setRate(4)} />
              <RateStar rate={rate} index={5} onClick={() => this.setRate(5)} />
            </div>
            <textarea
              data-testid="product-detail-evaluation"
              value={message}
              type="text"
              onChange={(e) => this.setState({ message: e.target.value })}
            />
            <button type="submit">Submit</button>
          </form>
          <div className="avaliations-wrap">
            <ul>
              {messages.map((avaliation) => (
                <Avaliation
                  email={avaliation.user}
                  rate={avaliation.rate}
                  message={avaliation.message}
                />
              ))}
            </ul>
          </div>


        </div>

      </div>
    );
  }
}
