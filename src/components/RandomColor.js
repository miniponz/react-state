import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: ''
  }

  randomColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const num = Math.floor(Math.random() * colors.length);
    return colors[num];
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ color: this.randomColor() });
      console.log(this.state);
    }, 1000);
  }

  render() {
    const { color } = this.state;
    return (
      <>
      <h1>RANDOM COLORS</h1>
      <div style={ { background: color, height: '100px', width: '100px' } }></div>
      </>
    );
  }
}



