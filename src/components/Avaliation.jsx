import React, { Component } from 'react';
import RateStar from './RateStar';

export default class Avaliation extends Component {
  render() {
    const { email, rate, message } = this.props;
    return (
      <div>
        <p className="user-email">
          {email}
        </p>
        <div className="stars-wrap">

          <RateStar rate={rate} index={1} />
          <RateStar rate={rate} index={2} />
          <RateStar rate={rate} index={3} />
          <RateStar rate={rate} index={4} />
          <RateStar rate={rate} index={5} />
        </div>
        <p>{message}</p>

      </div>
    );
  }
}
