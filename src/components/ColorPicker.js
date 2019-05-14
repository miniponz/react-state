import React, { PureComponent } from 'react';
// import styles from './colorPicker.css';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  handleClick = event => {
    this.setState({ color: event.target.textContent });
  };

  render() {
    let color = this.state.color;

    return (
      <section>
        <h1>Pick Colors!</h1>
        <button style={{ background: 'purple' }}onClick={this.handleClick}>Purple</button>
        <button style={{ background: 'blue' }}onClick={this.handleClick}>Blue</button>
        <button style={{ background: 'green' }}onClick={this.handleClick}>Green</button>
        <div style={{ background: color, height: '100px', width: '100px', display: 'in-line-block' }}>CHANGE MY COLOR!</div>
      </section>

    );
  }
}
