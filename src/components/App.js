import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: ''
  };

  selectColor = color => {
    this.setState({ color });
    console.log(color);
  }  

  render() {  
    return (
    <>
    <ColorPicker selectColorHandler={this.selectColor}/>
    <ColorDisplay color={this.state.color}/>
    </>
    );
  }
}
