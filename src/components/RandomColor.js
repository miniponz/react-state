import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: '',
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
      //eslint-disable-next-line
    }, this.props.refresh);
  }

  //check the state {}
  //if this.color and this.randomColor() are the same, 
  //make the color black.

  render() {
    const { color } = this.state;
    return (
      <>
      <div style={ { background: color, height: '200px', width: '200px', display: 'flex' } }></div>
      </>
    );
  }
}



