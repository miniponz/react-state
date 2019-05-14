import React from 'react';
import PropTypes from 'prop-types';

// import styles from './colorPicker.css';

function ColorPicker({ selectColorHandler }){

  return (
    <section>
      <h1>Pick Colors!</h1>
      <button style={{ background: 'purple' }} onClick={() => selectColorHandler('purple')}>Purple</button>
      <button style={{ background: 'blue' }} onClick={() => selectColorHandler('blue')}>Blue</button>
      <button style={{ background: 'green' }} onClick={() => selectColorHandler('green')}>Green</button>
    </section>
  );
}

ColorPicker.propTypes = {
  selectColorHandler: PropTypes.func.isRequired
};

export default ColorPicker;
