import React, { PureComponent } from 'react';

export default class ColorPicker extends PureComponent {
  state = {
    color: ''
  };

  render() {
    let color = this.state;
    
    return (
      <section>
        <h1>Pick Colors!</h1>
        <button>Purple</button>
        <button>Blue</button>
        <button>Green</button>
        <span></span>
      </section>

    );
  }
}
