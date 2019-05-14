import React, { PureComponent } from 'react';

export default class Incrementer extends PureComponent {
  state = {
    count: 0
  }

  increment = () => {
    this.setState(state => {
      return { count: state.count + 1 };
    });
  }

  render() {
    let { count } = this.state; 

    return (
      <>
        <p>Count: {count}</p>
        <button onClick={this.increment}>Increment Here!</button>
      </>
    );
  }

}
