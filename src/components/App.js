import React from 'react';
import RandomColor from './RandomColor';
import Header from './Header';
// import Incrementer from './Incrementer';

export default function App(){
  return (
    <div style={ { textAlign: 'center' } }>
      <Header />
      <RandomColor />
    </div>
  );
}

//needs to use setInterval(RandomColor, 1000);
