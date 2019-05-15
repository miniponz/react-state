import React from 'react';
import RandomColor from './RandomColor';
import Header from './Header';

export default function App(){
  return (
 <>
      <Header />
    <div style={ { display: 'flex', flexWrap: 'wrap' } }>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
      <RandomColor refresh={200}/>
    </div>
    </>
  );
}

//needs to use setInterval(RandomColor, 1000);
