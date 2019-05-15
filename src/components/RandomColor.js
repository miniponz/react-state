import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
    count: 1000
  }

  randomColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const num = Math.floor(Math.random() * colors.length);
    return colors[num];
  }

  decrement = () => {
    this.setState(state => {
      return { count: state.count - 100 };
    });
  }
  increment = () => {
    this.setState(state => {
      return { count: state.count + 100 };
    });

  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor() });
    }, this.state.count);
  }
  
  componentDidUpdate() {
    this.intervalId && clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor() });
      console.log(this.state.count);
    }, this.state.count);
  }

  render() {
    const { color, count } = this.state;

    return (
      <>
      <div style={ { background: color, height: '100vh', width: '100vw', position: 'fixed', top: '0', zIndex: '-1' } }></div>
        <p>Interval(ms): {count}</p>
        <div style={ { display: 'flex', flexWrap: 'wrap', width: '100vw', justifyContent: 'center' } }>
          <button onClick={this.decrement}>Make it Faster!</button>
          <button onClick={this.increment}>Make it Slower!</button>
        </div>
      </>
    );
  }
}



