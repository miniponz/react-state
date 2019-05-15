import React, { PureComponent } from 'react';
import RandomColor from './RandomColor';

export default class Incrementer extends PureComponent {
  state = {
    count: 1000
  }

  increment = () => {
    this.setState(state => {
      return { count: state.count - 100 };
    });
  }

  render() {
    let { count } = this.state; 

    return (
      <>
        <p>Count: {count}</p>
        <button onClick={this.increment}>Make it Faster!</button>
        <RandomColor refresh={count} />
      </>
    );
  }

}
